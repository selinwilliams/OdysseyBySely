export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'dietary',
      title: 'Dietary',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Vegetarian', value: 'vegetarian' },
          { title: 'Vegan', value: 'vegan' },
          { title: 'Gluten-Free', value: 'gluten-free' },
          { title: 'Dairy-Free', value: 'dairy-free' },
          { title: 'Nuts', value: 'nuts' },
        ],
      },
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      price: 'price',
    },
    prepare({ title, media, price }: any) {
      return {
        title,
        subtitle: `$${price}`,
        media,
      }
    },
  },
} 