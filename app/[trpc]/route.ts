import { appRouter } from '#/trpc/init';

import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

async function handler(req: Request) {
  return fetchRequestHandler({
    req,
    endpoint: '/api/trpc',
    router: appRouter,
    createContext: () => ({}),
  });
}
export { handler as GET, handler as POST };
