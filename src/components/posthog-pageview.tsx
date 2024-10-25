
import { useEffect } from "react";
import { usePostHog } from 'posthog-js/react';
import { useLocation } from "@tanstack/react-router";

export default function PostHogPageView() {
  const location = useLocation()
  const posthog = usePostHog();
  // Track pageviews
  useEffect(() => {
    if (location && posthog) {
      posthog.capture('$pageview', {
        '$current_url': location.pathname
      })
    }
  }, [location, posthog])

  return null
}