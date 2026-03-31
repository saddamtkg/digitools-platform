# DigiTools Platform

A modern digital tools marketplace project where users can browse premium products, add items to cart, remove items, and complete checkout with interactive toast messages.

## Live Preview

- Live Site: [Digitools Platform](https://digitools-platform-sh.netlify.app/)

## Project Overview

This project is built as a responsive single-page experience based on a marketplace-style UI.
It includes product listing, cart toggling, total price calculation, and checkout flow with toast notifications.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- DaisyUI 5
- React Icons
- React Toastify

## Main Features

- Product and Cart tab toggle in the main section
- Dynamic cart count in the navbar (shown only when cart has items)
- Add to cart, remove from cart, and proceed to checkout functionality
- Total cart price calculation
- Responsive layout for mobile, tablet, and desktop
- Toast notifications for cart actions

## Project Sections

- Navbar
- Hero Banner
- Stats Section
- Product / Cart Toggle Section
- Steps Section
- Pricing Section
- CTA Section
- Footer

## Local Setup

1. Clone the repository
2. Install dependencies:
   - `npm install`
3. Run development server:
   - `npm run dev`
4. Build for production:
   - `npm run build`
5. Preview production build:
   - `npm run preview`

## Data Source

- Product data is loaded from:
  - `public/products.json`

## What I Focused On

- Clean component-based structure
- Reusable props flow from root to child components
- Simple and readable cart logic
- Better user feedback through toast notifications

