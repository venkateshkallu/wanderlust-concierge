import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0, // Always fetch fresh data
        gcTime: 0, // Don't cache
        refetchOnWindowFocus: true,
        refetchOnMount: true,
        refetchOnReconnect: true,
        retry: 1,
      },
    },
  });

  const router = createRouter({
    routeTree,
    context: { queryClient },
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
    defaultPendingMs: 0,
    defaultPendingMinMs: 0,
  });

  return router;
};
