import { verifyPassword } from '@/lib/password';
import { signInSchema } from '@/lib/zod';

import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { ZodError } from 'zod';

import { getUserFromDb } from './services/users';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null;

          const { username, password } =
            await signInSchema.parseAsync(credentials);

          user = await getUserFromDb(username);

          if (!user) {
            throw new Error('Invalid credentials.');
          }

          const isValid = await verifyPassword(password, user.password);

          if (!isValid) {
            throw new Error('Invalid credentials.');
          }

          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null;
          }

          return null;
        }
      },
    }),
  ],
});
