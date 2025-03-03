import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Menu - Odyssey By Sely',
  description: 'Explore our carefully curated menu featuring modern interpretations of classic dishes.',
}

const menuSections = [
  {
    title: 'Starters',
    items: [
      {
        name: 'Mediterranean Mezze Platter',
        description: 'Hummus, babaganoush, tzatziki, olives, and warm pita bread',
        price: '$16',
      },
      {
        name: 'Seared Scallops',
        description: 'Pan-seared scallops with cauliflower purée and crispy pancetta',
        price: '$19',
      },
    ],
  },
  {
    title: 'Main Courses',
    items: [
      {
        name: 'Grilled Lamb Chops',
        description: 'Herb-crusted lamb chops with roasted vegetables and mint sauce',
        price: '$38',
      },
      {
        name: 'Pan-Seared Salmon',
        description: 'Fresh Atlantic salmon with quinoa risotto and asparagus',
        price: '$32',
      },
    ],
  },
  {
    title: 'Desserts',
    items: [
      {
        name: 'Dark Chocolate Soufflé',
        description: 'Warm chocolate soufflé with vanilla bean ice cream',
        price: '$14',
      },
      {
        name: 'Crème Brûlée',
        description: 'Classic vanilla bean crème brûlée with fresh berries',
        price: '$12',
      },
    ],
  },
]

export default function MenuPage() {
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
          {menuSections.map((section) => (
            <div key={section.title} className="border-t border-gray-800 pt-10">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {section.title}
              </h2>
              <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-lg bg-gray-900 p-6 transition hover:bg-gray-800"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-white">{item.name}</h3>
                      <span className="text-lg font-semibold text-white">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-300">{item.description}</p>
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