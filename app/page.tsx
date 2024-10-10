'use client';

import { Button } from '#/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#/components/ui/card';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '#/components/ui/dialog';
import { Input } from '#/components/ui/input';
import { Label } from '#/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '#/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '#/components/ui/tabs';

import {
  RiAddLargeLine,
  RiAddLine,
  RiExternalLinkLine,
  RiLogoutBoxLine,
  RiMoonLine,
  RiSettings3Fill,
  RiSettings4Line,
  RiSignalTowerLine,
  RiSparkling2Fill,
  RiSunLine,
  RiTelegramLine,
} from '@remixicon/react';
import React from 'react';

import { useTheme } from 'next-themes';
import Link from 'next/link';

function Page() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Card className="w-[40rem]">
        <CardHeader>
          <CardTitle className="text-2xl">Home</CardTitle>
          <CardDescription>
            Please select a chat or bot to get started.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="bots">
            <TabsList>
              <TabsTrigger value="chats">Chats</TabsTrigger>
              <TabsTrigger value="bots">Bots</TabsTrigger>
            </TabsList>
            <TabsContent value="chats" className="space-y-6">
              <div className="h-52 w-full flex flex-col gap-2 justify-center items-center bg-muted rounded-xl border">
                <p className="mt-2 text-muted-foreground">
                  You don't have any chats, please wait for a chat to be
                  created.
                </p>
                <Button>
                  <RiExternalLinkLine className="w-4 h-4 mr-2" />
                  Learn more
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="bots" className="space-y-6">
              <div className="h-52 w-full flex flex-col gap-2 justify-center items-center bg-muted rounded-xl border">
                <p className="mt-2 text-muted-foreground">
                  Let's create your first bot! Click the button below to get
                  started.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <RiAddLargeLine className="w-3 h-3 mr-2" />
                      New Bot
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Enter token</DialogTitle>
                      <DialogDescription>
                        You can get your bot token from BotFather
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-2">
                      <Label htmlFor="token">Token</Label>
                      <Input
                        placeholder="123456789:ABC-DEF1234ghIkl-zyx57W2v1u123ew11"
                        id="token"
                        name="token"
                        className="w-full"
                      />
                    </div>
                    <DialogFooter>
                      <Button type="submit">Submit</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <div className="flex w-full gap-1">
            <Button variant="outline">
              <RiSignalTowerLine className="w-4 h-4 mr-1" />
              Webhook
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
              }}
            >
              {theme === 'dark' ? (
                <RiSunLine className="w-4 h-4 mr-1" />
              ) : (
                <RiMoonLine className="w-4 h-4 mr-1" />
              )}
              {theme === 'dark' ? 'Light' : 'Dark'}
            </Button>
            <div className="flex-1" />
            <Select>
              <SelectTrigger className="w-[150px]" value="en">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="ru">Russian</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardFooter>
      </Card>
      <div className=" mt-2 flex text-xs text-muted-foreground gap-2">
        <p className="">grambase v1.0.0</p>•
        <a href="https://t.me/grambase_dev" target="_blank">
          Telegram Group
        </a>
        •<Link href="/logout">Logout</Link>
      </div>
    </div>
  );
}

export default Page;
