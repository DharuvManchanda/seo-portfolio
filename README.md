# Hair & Makeup by Anjali - Portfolio Website

A professional portfolio website for Anjali Bhutani, a makeup artist specializing in editorial, fashion, and bridal makeup, including airbrush techniques.

## Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Modern UI Components**: 
  - Animated tooltips
  - Parallax scrolling effects
  - Interactive link previews
  - Hover effects and focus cards
- **Instagram Integration**: Dynamically fetches and displays Instagram media with caching
- **Infinite Scrolling**: Lazy loads content as the user scrolls
- **SEO Optimized**: Includes sitemap generation and metadata
- **Booking System**: Direct WhatsApp integration for appointment booking
- **Social Media Links**: Easy access to Instagram and LinkedIn profiles

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **State Management**: Recoil
- **Icons**: React Icons, Tabler Icons
- **Analytics**: Vercel Analytics
- **SEO**: next-sitemap

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `pages/`: Next.js pages/routes
  - `index.tsx`: Home page
  - `about.tsx`: About page
  - `projects.tsx`: Portfolio gallery with Instagram integration
- `components/`: Reusable UI components
  - `header.tsx`: Navigation header
  - `home.tsx`: Home page content
  - `ui/`: UI component library
    - `parallax-scroll.tsx`: Image gallery with parallax effects
    - `animated-tooltip.tsx`: Interactive tooltips
    - `link-preview.tsx`: Preview cards for links
- `public/`: Static assets
  - `images/`: Image assets including hero images
- `styles/`: Global styles

## Instagram Integration

The portfolio showcases Anjali's work by integrating with the Instagram Graph API. Features include:
- Fetching media from Instagram
- Client-side caching to improve performance
- Support for images, videos, and carousel albums
- Lazy loading with infinite scroll
- Hover effects to focus on selected items

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
