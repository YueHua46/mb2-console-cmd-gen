import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'virtual:uno.css'

// Import the generated route tree
import { routeTree } from './routeTree.gen.ts'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import i18next from 'i18next';
import { initReactI18next } from "react-i18next";

import enTranslations from './locales/en.ts';
import zhTranslations from './locales/zh.ts';

import posthog from 'posthog-js'

posthog.init('phc_2D7Kb6urVJstiAMsWoMm9LZqGjLIKDE1Du4DJiiYCvR',
  {
    api_host: 'https://us.i.posthog.com',
    person_profiles: 'always' // or 'always' to create profiles for anonymous users as well
  }
)

i18next.use(initReactI18next).init({
  lng: 'zh',
  debug: true,
  resources: {
    en: {
      translation: enTranslations
    },
    zh: {
      translation: zhTranslations
    }
  }
})


// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
