import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'virtual:uno.css'

// Import the generated route tree
import { routeTree } from './routeTree.gen.ts'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import './i18n/config.ts'
// import i18next from 'i18next';
// import { initReactI18next } from "react-i18next";

import posthog from 'posthog-js'
// import { localeTransitions } from './utils/i18n.ts'

// import commonEn from './locales/en-US/common.json'
// import commonZh from './locales/zh-CN/common.json'

posthog.init('phc_2D7Kb6urVJstiAMsWoMm9LZqGjLIKDE1Du4DJiiYCvR',
  {
    api_host: 'https://us.i.posthog.com',
    person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
  }
)

// i18next.use(initReactI18next).init({
//   debug: true,
//   ns: Object.keys(localeTransitions),
//   defaultNS: "zh-CN",
//   resources: localeTransitions,
//   lng: 'zh-CN',
// })



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
