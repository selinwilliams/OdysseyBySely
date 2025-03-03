# Odyssey By Sely - Restaurant Website

A modern, responsive restaurant website built with Next.js 14, TypeScript, and Tailwind CSS. This website provides an elegant interface for customers to explore the menu, make reservations, find location information, and contact the restaurant.

## Features

- 🎥 Dynamic video background on the homepage
- 🍽️ Interactive menu with categorized sections
- 📅 Online reservation system
- 📍 Location information and opening hours
- 📱 Fully responsive design
- 🎨 Modern, dark theme aesthetics
- ⚡ Fast loading with Next.js App Router
- 🔍 SEO optimized

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) - State management

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/selinwilliams/odysseybysely.git
   ```

2. Install dependencies:
   ```bash
   cd odysseybysely
   npm install
   ```

3. Add your background video:
   - Place your video file in `public/videos/background.mp4`

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
odysseybysely/
├── src/
│   ├── app/
│   │   ├── (pages)/
│   │   │   ├── menu/
│   │   │   ├── reservations/
│   │   │   ├── location/
│   │   │   └── contact/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       └── Navigation.tsx
├── public/
│   └── videos/
└── package.json
```

## Customization

- Update menu items in `src/app/(pages)/menu/page.tsx`
- Modify business hours in `src/app/(pages)/location/page.tsx`
- Update contact information in `src/app/(pages)/contact/page.tsx`
- Customize the theme by modifying Tailwind classes

## TODO

- [ ] Implement backend API for reservation system
- [ ] Add form validation and error handling
- [ ] Integrate with a restaurant management system
- [ ] Add image gallery for dishes
- [ ] Implement mobile menu functionality

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Selin Williams ([@selinwilliams](https://github.com/selinwilliams))
