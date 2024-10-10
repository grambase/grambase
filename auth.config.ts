import { CredentialsSignin, type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Github from 'next-auth/providers/github';

class InvalidLoginError extends CredentialsSignin {
  code = 'Invalid identifier or password';
}

// TODO: Implement this

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
        // const email = credentials.email as string;
        // const password = credentials.password as string;

        // const user = await db.query.users.findFirst({
        //   where: eq(users.email, email),
        // });

        // if (!user) {
        throw new InvalidLoginError();
        // }

        // const userPassword = user.password ?? '';
        // const passwordHash = await hash(password, 10);

        // if (await compare(passwordHash, userPassword)) {
        //   const { password, ...rest } = user;
        //   return rest;
        // } else {
        //   return null;
        // }
      },
    }),
  ],
} satisfies NextAuthConfig;
