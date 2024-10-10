'use client';

import { Avatar, AvatarFallback } from '#/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '#/components/ui/dropdown-menu';
import { Input } from '#/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '#/components/ui/tabs';

import {
  RiBankCard2Line,
  RiCloudLine,
  RiGithubLine,
  RiHome6Fill,
  RiInformationLine,
  RiKeyboardLine,
  RiLogoutCircleRLine,
  RiSettings2Line,
  RiSettings3Fill,
  RiSparkling2Fill,
  RiUser2Line,
} from '@remixicon/react';
import React from 'react';

import { usePathname } from 'next/navigation';

const menuItems = [
  {
    title: 'Home',
    icon: <RiHome6Fill size={18} />,
    path: '/',
    regex: /^\/$/,
  },
  {
    title: 'Studio',
    icon: <RiSparkling2Fill size={18} />,
    path: '/studio',
    regex: /^\/studio/,
  },

  {
    title: 'Moderation',
    icon: <RiSettings3Fill size={18} />,
    path: '/moderation',
    regex: /^\/moderation/,
  },
];

function Header() {
  const path = usePathname();

  return (
    <div className="grid grid-cols-3 items-center p-4 border-b">
      <div>
        <h1 className="text-2xl font-semibold select-none cursor-pointer">
          gram
          <span className="text-primary">base</span>
        </h1>
      </div>
      <div className="flex justify-center">
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Moderation</TabsTrigger>
            <TabsTrigger value="password">Bot Studio</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="flex justify-end gap-4">
        <button className="flex items-center justify-between border rounded-lg hover:bg-muted/50 bg-muted/20 pl-4 pr-2 w-[200px]">
          <p className="text-sm text-muted-foreground">Search</p>
          <span className="text-xs p-1 bg-black/5 text-muted-foreground rounded-lg px-2 text-center">
            ⌘ K
          </span>
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="border-2 select-none cursor-pointer">
              <AvatarFallback>MA</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <RiUser2Line className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <RiBankCard2Line className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <RiSettings2Line className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <RiKeyboardLine className="mr-2 h-4 w-4" />
                <span>Keyboard shortcuts</span>
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {/* <DropdownMenuItem>
            <Users className="mr-2 h-4 w-4" />
            <span>Team</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <Plus className="mr-2 h-4 w-4" />
            <span>New Team</span>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem> */}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <RiGithubLine className="mr-2 h-4 w-4" />
              <span>GitHub</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <RiInformationLine className="mr-2 h-4 w-4" />
              <span>Support</span>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <RiCloudLine className="mr-2 h-4 w-4" />
              <span>API</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <RiLogoutCircleRLine className="mr-2 h-4 w-4" />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Header;
