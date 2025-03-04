import { Metadata } from 'next'
import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Menu - Odyssey By Sely',
  description: 'Explore our carefully curated menu featuring modern interpretations of classic dishes.',
}

async function getMenuData() {
  const categories = await client.fetch(`
    *[_type == "category"] | order(order asc) {
      _id,
      name,
      description,
      "items": *[_type == "menuItem" && references(^._id)] | order(name asc) {
        _id,
        name,
        description,
        price,
        image,
        dietary
      }
    }
  `)
  return categories
}

export default async function MenuPage() {
  const menuSections = await getMenuData()

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Our Menu
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-300 sm:mt-4">
            Carefully curated dishes that blend traditional flavors with modern techniques
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {menuSections.map((section: any) => (
            <div key={section._id} className="border-t border-gray-800 pt-10">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {section.name}
              </h2>
              {section.description && (
                <p className="mt-2 text-gray-300">{section.description}</p>
              )}
              <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item: any) => (
                  <div
                    key={item._id}
                    className="group relative rounded-lg bg-gray-900 p-6 transition hover:bg-gray-800"
                  >
                    {item.image && (
                      <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                        <Image
                          src={urlFor(item.image).url()}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-200 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-white">{item.name}</h3>
                      <span className="text-lg font-semibold text-white">
                        ${item.price}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-300">{item.description}</p>
                    {item.dietary && item.dietary.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.dietary.map((diet: string) => (
                          <span
                            key={diet}
                            className="inline-flex items-center rounded-full bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-300"
                          >
                            {diet}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 