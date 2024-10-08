import { initTRPC } from '@trpc/server';

type Context = {};

export const t = initTRPC.context<Context>().create();

export const publicProcedure = t.procedure;

export const router = t.router;
export const appRouter = router({});

export const createCallerFactory = t.createCallerFactory;

export const createCaller = createCallerFactory(appRouter);

export const createTRPCCaller = async () => {
  return createCaller({});
};

export type AppRouter = typeof appRouter;
