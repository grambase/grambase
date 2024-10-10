import Header from '#/components/header';
import { auth } from '#/lib/auth';

import React from 'react';

import { redirect } from 'next/navigation';

import Sidebar from '../../../components/sidebar';

async function Layout({ children }: { children: React.ReactNode }) {
  const user = await auth();
  if (!user) {
    redirect('/auth/login');
  }
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />
      <div className="flex-1 h-full relative flex overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-auto pb-4">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
