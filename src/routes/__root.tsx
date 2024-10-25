import App from '@/App'
import PostHogPageView from '@/components/posthog-pageview'
import { Toaster } from '@/components/tosater'
import Header from '@/layout/header'
import Main from '@/layout/main'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import React, { Suspense } from 'react'

// Devtools for TanStack Router 
// only in development mode
const TanStackRouterDevtools =
    process.env.NODE_ENV === 'production'
        ? () => null // Render nothing in production
        : React.lazy(() =>
            // Lazy load in development
            import('@tanstack/router-devtools').then((res) => ({
                default: res.TanStackRouterDevtools,
            })),
        )

export const Route = createRootRoute({
    component: () => (
        <App>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Suspense>
                <TanStackRouterDevtools />
            </Suspense>
            <Toaster />
            <PostHogPageView />
        </App>
    ),
})