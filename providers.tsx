'use client';

import React from 'react';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

import { TRPCProvider } from './lib/trpc/client';

type Props = {
  children: React.ReactNode;
};
function Providers({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
    >
      <Toaster position="bottom-center" />
      <TRPCProvider>{children}</TRPCProvider>
      <ProgressBar
        height="4px"
        color="#000"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </ThemeProvider>
  );
}

export default Providers;
