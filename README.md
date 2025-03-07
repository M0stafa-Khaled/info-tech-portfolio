# Info-Tech Portfolio Project

## Project Overview

Info-Tech is a modern, responsive web application built using React, TypeScript, and Vite. It serves as a comprehensive portfolio showcasing technical skills, projects, and professional information.

## Project Structure

```
info-tech/
│
├── config files
│   ├── eslint.config.js       # ESLint configuration
│   ├── tailwind.config.js     # Tailwind CSS configuration
│   ├── tsconfig.json          # TypeScript configuration
│   └── vite.config.ts         # Vite build configuration
│
├── src/
│   ├── App.tsx                # Main application component
│   ├── main.tsx               # Application entry point
│   ├── index.css              # Global styles
│   ├── vite-env.d.ts          # Vite environment types
│   │
│   ├── api/                   # API service handlers
│   │   └── auth.ts            # Authentication API calls
│   │
│   ├── app/                   # Application state management
│   │   ├── store.ts           # Redux store configuration
│   │   └── features/          # Redux feature slices
│   │       └── auth/
│   │           └── authSlice.tsx  # Authentication Redux slice
│   │
│   ├── components/            # Reusable React components
│   │   ├── BgImage.tsx        # Background image component
│   │   ├── Footer.tsx         # Site footer
│   │   ├── Header.tsx         # Site header
│   │   ├── NavList.tsx        # Navigation list
│   │   ├── ProjectCard.tsx    # Project display card
│   │   │
│   │   ├── auth/
│   │   │   └── ProtectedRoute.tsx  # Route protection component
│   │   │
│   │   ├── home/              # Home page specific components
│   │   │   ├── Hero.tsx
│   │   │   ├── AboutUs.tsx
│   │   │   ├── OurProjects.tsx
│   │   │   ├── OurServices.tsx
│   │   │   ├── CustomerOpinions.tsx
│   │   │   └── ServiceCard.tsx
│   │   │
│   │   ├── svg/               # SVG icon components
│   │   │
│   │   └── ui/                # Base UI components
│   │
│   ├── config/                # Configuration files
│   │   └── axios.config.ts    # Axios HTTP client configuration
│   │
│   ├── interfaces/            # TypeScript interfaces
│   │   └── ... (type definitions)
│   │
│   ├── layout/                # Layout components
│   │   ├── RootLayout.tsx     # Main application layout
│   │   ├── AdminDashboardLayout.tsx  # Admin dashboard layout
│   │   └── EmployeeDashboardLayout.tsx  # Employee dashboard layout
│   │
│   ├── pages/                 # Page-level components
│   │   ├── public/            # Public pages
│   │   │
│   │   ├── auth/              # Authentication pages
│   │   │   ├── Login.tsx
│   │   │   └── Register.tsx
│   │   │
│   │   └── dashboard/         # Dashboard pages
│   │       └── ... (admin, employee dashboards)
│   │
│   ├── router/                # Routing configuration
│   │   └── index.tsx          # Main router setup
│   │
│   ├── utils/                 # Utility functions
│   │
│   └── validations/           # Form validation schemas
│      └── ... (Zod validation schemas)
│
├── .env                       # Environment variables
└── package.json               # Project dependencies and scripts
```

## Technology Stack

### Core Technologies

- **React 18.3.1**: Modern JavaScript library for building user interfaces
- **TypeScript 5.6.2**: Typed superset of JavaScript for enhanced developer experience
- **Vite 6.0.1**: Next-generation frontend tooling for fast development and build

### State Management

- **Redux Toolkit 2.5.0**: Efficient state management
- **React Query 5.64.2**: Data fetching and server-state management

### Form Handling

- **React Hook Form 7.54.2**: Performant, flexible form validation
- **Zod 3.24.1**: TypeScript-first schema validation

### Routing

- **React Router DOM 6.28.0**: Declarative routing for React applications

### Styling

- **Tailwind CSS 3.4.17**: Utility-first CSS framework

### Additional Libraries

- **Axios 1.7.9**: Promise-based HTTP client
- **Swiper 11.2.1**: Modern mobile touch slider
- **React Icons 5.4.0**: Popular icon library
- **React Toastify 11.0.3**: Notification library

## Routes

- Public Routes: Home, About, Projects, Services, Contact
- Authentication: Login, Register
- Protected Routes: Admin Dashboard, Employee Dashboard

## Environment Configuration

- Uses `.env` for environment variables
- API endpoint configured via `VITE_API_URL`

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
