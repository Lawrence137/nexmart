# NexMart - E-commerce Platform

A modern e-commerce platform built with React and Vite, similar to Jumia.

## Project Structure

```
src/
├── assets/                 # Static assets (images, icons, etc.)
├── components/            # Reusable UI components
│   ├── common/           # Common components (Button, Input, etc.)
│   ├── layout/           # Layout components (Header, Footer, etc.)
│   ├── product/          # Product-related components
│   └── cart/             # Cart-related components
├── features/             # Feature-specific components and logic
│   ├── auth/            # Authentication related
│   ├── products/        # Product listing and details
│   ├── cart/            # Shopping cart functionality
│   └── checkout/        # Checkout process
├── hooks/               # Custom React hooks
├── pages/              # Page components
│   ├── Home/
│   ├── Products/
│   ├── ProductDetails/
│   ├── Cart/
│   ├── Checkout/
│   ├── Auth/
│   └── Profile/
├── services/           # API services and external integrations
├── store/             # State management (Redux/Context)
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
└── styles/            # Global styles and theme configuration

```

## Features to be Implemented

- User Authentication (Sign up, Login, Password Reset)
- Product Catalog with Categories
- Product Search and Filtering
- Shopping Cart
- Checkout Process
- User Profile Management
- Order History
- Product Reviews and Ratings
- Responsive Design

## Tech Stack

- React
- Vite
- TailwindCSS
- React Router
- State Management (TBD)
- API Integration (TBD)

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

## Next Steps

1. Set up routing
2. Implement authentication
3. Create product catalog
4. Add shopping cart functionality
5. Implement checkout process
6. Add user profile management
7. Integrate with backend API

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
