"use client";

import { useEffect } from "react";

export function useAnalytics() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      console.debug("Analytics placeholder: page view recorded");
    }
  }, []);
}
