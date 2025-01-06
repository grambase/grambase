import { saltAndHashPassword } from '@/lib/password';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const response = await prisma.user.upsert({
  where: {
    username: 'admin',
  },
  create: {
    username: 'admin',
    password: await saltAndHashPassword('admin0x7'),
  },
  update: {
    password: await saltAndHashPassword('admin0x7'),
  },
});

console.log('response', response);
