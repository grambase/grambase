import authConfig from '#/lib/auth.config';
import { prisma } from '#/lib/prisma';

import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt', maxAge: 7 * 24 * 60 * 60 },
  ...authConfig,
});
