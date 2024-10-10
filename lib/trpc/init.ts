import { initTRPC } from '@trpc/server';
import { ZodError } from 'zod';

import { auth } from './routers/auth';

type Context = {};

export const t = initTRPC.context<Context>().create({
  errorFormatter(opts) {
    const { shape, error } = opts;
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.code === 'BAD_REQUEST' && error.cause instanceof ZodError
            ? error.cause.flatten()
            : null,
      },
    };
  },
});

export const publicProcedure = t.procedure;

export const router = t.router;
export const appRouter = router({
  auth: auth(),
});

export const createCallerFactory = t.createCallerFactory;

export const createCaller = createCallerFactory(appRouter);

export const createTRPCCaller = async () => {
  return createCaller({});
};

export type AppRouter = typeof appRouter;
