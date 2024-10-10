import { cleanEnv, str } from 'envalid';

export const env = cleanEnv(process.env, {
  DATABASE_URL: str({
    desc: 'The URL to connect to the database',
  }),
  EDITION: str({
    desc: 'The edition of the app',
    default: 'community',
  }),
  AUTH_SECRET: str({
    desc: 'The secret key for the authentication',
  }),
});
