'use client';

import { NextUIProvider } from '@nextui-org/react';
import React from 'react';

import { Toaster } from 'sonner';

import { TRPCProvider } from './trpc/client';

type Props = {
  children: React.ReactNode;
};
function Providers({ children }: Props) {
  return (
    <NextUIProvider disableRipple>
      <Toaster position="bottom-center" />
      <TRPCProvider>{children}</TRPCProvider>
    </NextUIProvider>
  );
}

export default Providers;
