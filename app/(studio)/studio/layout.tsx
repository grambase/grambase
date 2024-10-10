'use client';

import { Card } from '#/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '#/components/ui/tabs';
import { menuItems } from '#/lib/constants';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Sidebar from '../../../components/sidebar';

function Layout({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  return (
    <div className="h-screen flex flex-col">
      <div className="p-2 grid grid-cols-3">
        <div className="flex justify-start"></div>
        <div className="flex justify-center">
          <Tabs
            defaultValue={
              menuItems.find((item) => item.regex.test(path))?.path ?? '/'
            }
            className=""
          >
            <TabsList className="grid w-full grid-cols-2">
              {menuItems.map((item) => (
                <TabsTrigger key={item.title} value={item.path} asChild>
                  <Link
                    href={item.path}
                    className="text-center flex gap-2 items-center"
                  >
                    <item.icon size={18} />
                    {item.title}
                  </Link>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <div className="flex justify-end"></div>
      </div>
      <div className="flex-1 px-4 h-full relative">
        <Card className="p-0 h-full rounded-b-none rounded-t-2xl flex border-b-0">
          {children}
        </Card>
      </div>
    </div>
  );
}

export default Layout;
