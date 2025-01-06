import { compare, genSalt, hash } from 'bcryptjs';

export async function saltAndHashPassword(password: string) {
  const salt = await genSalt(10);
  return hash(password, salt);
}

export async function verifyPassword(password: string, hash: string) {
  return compare(password, hash);
}
