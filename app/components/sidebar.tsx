'use client';

import { Alert, AlertDescription, AlertTitle } from '#/components/ui/alert';
import { Avatar, AvatarFallback } from '#/components/ui/avatar';
import { Badge } from '#/components/ui/badge';
import { Button } from '#/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '#/components/ui/select';

import {
  RiBarChart2Line,
  RiBook2Line,
  RiExternalLinkLine,
  RiFilterLine,
  RiMessage3Line,
  RiRobotLine,
  RiSettings2Line,
  RiSettings3Line,
  RiSettings4Line,
  RiSideBarLine,
  RiSparkling2Line,
  RiTimeLine,
} from '@remixicon/react';
import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const sidebarItems = [
  {
    title: 'Dashboard',
    icon: RiBarChart2Line,
    path: '/moderation',
  },
  {
    title: 'Messages',
    icon: RiMessage3Line,
    path: '/moderation/messages',
  },
  {
    title: 'Filters',
    icon: RiFilterLine,
    path: '/moderation/filters',
  },
  {
    title: 'Policies',
    icon: RiBook2Line,
    path: '/moderation/policies',
  },
  {
    title: 'Anti-Spam',
    icon: RiRobotLine,
    path: '/moderation/anti-spam',
  },
  {
    title: 'Rate Limits',
    icon: RiTimeLine,
    path: '/moderation/rate-limits',
  },

  {
    title: 'Settings',
    icon: RiSettings4Line,
    path: '/moderation/settings',
  },
];

function Sidebar() {
  const path = usePathname();
  return (
    <div className="h-full flex flex-col w-72 space-y-4 border-r bg-gradient-to-t from-neutral-50 to-transparent dark:from-neutral-950">
      <div className="p-4 border-b h-20">
        <Select>
          <SelectTrigger className="text-md h-12">
            <SelectValue
              placeholder={
                <div className="flex items-center gap-2">
                  <h1 className="text-sm font-medium">BotMate Chat</h1>
                  <Badge variant="outline">Free</Badge>
                </div>
              }
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="px-4 flex justify-between text-neutral-500">
        <h2 className="text-xs font-semibold uppercase">Dashboard</h2>
        <RiSideBarLine size={18} />
      </div>
      <div className="px-4">
        {sidebarItems.map((item) => {
          const isActive = path === item.path;

          return (
            <Link
              key={item.title}
              href={item.path}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm rounded-md select-none ${
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted/50'
              }`}
            >
              <item.icon size={20} />
              {item.title}
            </Link>
          );
        })}
      </div>
      <div className="flex-1"></div>
      <div className="p-4 space-y-2">
        <Alert className="text-sm py-4">
          <RiSparkling2Line className="h-4 w-4" />
          <div>
            <AlertTitle>Bot Studio</AlertTitle>
            <AlertDescription>
              Visually design your chatbot with our Studio.
            </AlertDescription>
            <a
              href="#"
              className="text-primary flex items-center gap-2 mt-2 hover:underline"
            >
              <RiExternalLinkLine className="h-4 w-4" /> Checkout
            </a>
          </div>
        </Alert>
      </div>
    </div>
  );
}

export default Sidebar;
