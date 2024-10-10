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
import { Checkbox } from '#/components/ui/checkbox';
import { Input } from '#/components/ui/input';
import { Label } from '#/components/ui/label';

import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import Link from 'next/link';

import { signInWithCredentials, signInWithGithub } from './action';

function Page() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    await signInWithCredentials(email, password);
  }

  return (
    <form
      className="h-screen flex justify-center items-center"
      onSubmit={handleSubmit}
    >
      <Card className="w-[26rem] p-4">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Sign in to your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input name="email" id="email" />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password" id="password" />
          </div>

          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms2" />
              <label
                htmlFor="terms2"
                className="text-sm font-medium leading-none"
              >
                Remember me
              </label>
            </div>

            <Link href="/auth/forgot-password" className="text-sm">
              Forgot password?
            </Link>
          </div>
          <Button color="primary" type="submit" className="w-full">
            Login
          </Button>
          <div className="flex items-center gap-4 mx-4 pt-2">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <p className="text-center text-sm opacity-50">OR</p>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>
        </CardContent>

        <CardFooter className="gap-4 flex-col">
          <div className="space-y-2">
            <Button variant="outline" className="w-full">
              <FcGoogle className="w-4 h-4 mr-2" />
              Continue with Google
            </Button>
            <Button
              variant="outline"
              onClick={async () => {
                await signInWithGithub();
              }}
              className="w-full"
            >
              <FaGithub className="w-4 h-4 mr-2" />
              Continue with Github
            </Button>
          </div>

          <p className="text-center text-sm">
            Don't have an account?{' '}
            <Link href="/auth/signup" className="text-blue-500">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </form>
  );

  // return (
  //   <form
  //     className="h-screen flex justify-center items-center"
  //     onSubmit={handleSubmit}
  //   >
  //     <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
  //     <Card className="w-[26rem] p-4">
  //       <CardHeader>
  //         <h1 className="text-2xl font-semibold">Login</h1>
  //       </CardHeader>
  //       <CardBody className="space-y-4">
  //         <Input label="Email" name="email" />
  //         <Input label="Password" type="password" name="password" />
  //         <div className="flex justify-between">
  //           <Checkbox>Remember me</Checkbox>
  //           <a href="#">Forgot password?</a>
  //         </div>
  //         <Button color="primary" type="submit">
  //           Login
  //         </Button>
  //       </CardBody>

  //       <div className="flex items-center gap-4 mx-4">
  //         <div className="flex-1 h-[1px] bg-gray-300"></div>
  //         <p className="text-center text-sm opacity-50">OR</p>
  //         <div className="flex-1 h-[1px] bg-gray-300"></div>
  //       </div>

  //       <CardFooter className="gap-4 flex-col">
  //         <div className="space-y-2">
  //           <Button
  //             fullWidth
  //             variant="bordered"
  //             startContent={<FcGoogle size={20} />}
  //           >
  //             Continue with Google
  //           </Button>
  //           <Button
  //             fullWidth
  //             variant="bordered"
  //             startContent={<FaGithub size={20} />}
  //             onClick={async () => {
  //               await signInWithGithub();
  //             }}
  //           >
  //             Continue with Github
  //           </Button>
  //         </div>

  //         <p className="text-center text-sm">
  //           Don't have an account?{' '}
  //           <Link href="/auth/signup" className="text-primary">
  //             Sign up
  //           </Link>
  //         </p>
  //       </CardFooter>
  //     </Card>
  //   </form>
  // );
}

export default Page;
