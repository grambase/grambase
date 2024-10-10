import { prisma } from '#/lib/prisma';

import { hash } from 'bcryptjs';
import { z } from 'zod';

import { publicProcedure } from '../init';

export const auth = () => ({
  signup: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
      }),
    )
    .mutation(async ({ input }) => {
      const exist = await prisma.user.findFirst({
        where: {
          email: input.email,
        },
      });

      if (exist) {
        throw new Error('User already exists');
      }

      const password = await hash(input.password, 10);
      await prisma.user
        .create({
          data: {
            name: input.name,
            email: input.email,
            password,
          },
        })
        .catch((err) => {
          console.error(err);
          throw new Error('Failed to create user');
        });
    }),
});
