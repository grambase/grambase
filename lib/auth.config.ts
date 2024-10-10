import { compare } from 'bcryptjs';
import { CredentialsSignin, type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Github from 'next-auth/providers/github';

import { prisma } from './prisma';

class InvalidLoginError extends CredentialsSignin {
  code = 'Invalid identifier or password';
}

export default {
  providers: [
    Github,
    Credentials({
      credentials: {
        name: { type: 'text' },
        email: { type: 'email' },
        password: { type: 'password' },
      },
      authorize: async (credentials) => {
        const email = credentials.email as string;
        const password = credentials.password as string;

        const user = await prisma.user.findFirst({
          where: {
            email,
          },
        });

        if (!user) {
          throw new InvalidLoginError();
        }

        const userPassword = user.password ?? '';

        if (await compare(password, userPassword)) {
          const { password, ...rest } = user;
          return rest;
        } else {
          throw new InvalidLoginError();
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
