import authConfig from '#/auth.config';
import { db } from '#/db/drizzle';
import { accounts, sessions, users, verificationTokens } from '#/db/schemas';

import { DrizzleAdapter } from '@auth/drizzle-adapter';
import NextAuth from 'next-auth';

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  session: { strategy: 'jwt' },
  ...authConfig,
});
