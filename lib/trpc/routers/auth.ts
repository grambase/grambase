import { db } from '#/lib/db/drizzle';
import { type NewUser, users } from '#/lib/db/schemas';

import { hash } from 'bcryptjs';
import { eq } from 'drizzle-orm';
import { z } from 'zod';

import { publicProcedure } from '../init';

export const auth = () => ({
  signUp: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      // Check if user already exists
      const exist = await db
        .select()
        .from(users)
        .where(eq(users.email, input.email))
        .limit(1);

      if (exist.length > 0) {
        throw new Error('User already exists');
      }

      // Create user
      const newUser: NewUser = {
        name: input.name,
        email: input.email,
        emailVerified: new Date(),
        password: await hash(input.password, 10),
      };

      await db.insert(users).values(newUser);
    }),
});
