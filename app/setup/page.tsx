'use client';

import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import React from 'react';

function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="absolute w-[30rem] h-[30rem] opacity-20 blur-2xl bg-gradient-to-b from-red-400 to-purple-600 rounded-full" />
      <Card className="flex flex-col h-[35rem] w-[30rem] p-4 bg-white/60">
        <CardHeader>
          <div>
            <h1 className="text-2xl font-semibold">Let's get started</h1>
            <p className="text-sm text-muted-foreground">
              To get started, first add a new bot to your account
            </p>
          </div>
        </CardHeader>

        <CardBody></CardBody>

        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}

export default Page;
