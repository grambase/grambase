'use server';

import { signIn } from '#/lib/auth';

export async function signInWithGithub() {
  await signIn('github', {
    redirectTo: '/',
  });
}

export async function signInWithCredentials(email: string, password: string) {
  return signIn('credentials', { email, password, redirectTo: '/' });
}
