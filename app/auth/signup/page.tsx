'use client';

import { Button } from '#/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#/components/ui/card';
import { Checkbox } from '#/components/ui/checkbox';
import { Input } from '#/components/ui/input';
import { Label } from '#/components/ui/label';
import { trpc } from '#/lib/trpc/client';

import React from 'react';

import { TRPCClientError } from '@trpc/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import SocialLogin from '../_/social-login';

function Page() {
  const r = useRouter();
  const signup = trpc.auth.signup.useMutation();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    signup
      .mutateAsync({ name, email, password })
      .then(() => {
        toast.success('Account created successfully');
        r.push('/auth/login');
      })
      .catch((err) => {
        if (err instanceof TRPCClientError) {
          if (err.data.zodError) {
            const errors = err.data.zodError.fieldErrors ?? {
              unknonw: ['An error has occurred'],
            };
            const [first] = Object.keys(errors);
            const message = errors[first]?.[0];
            toast.error(message);
          } else {
            toast.error(err.message);
          }
        }
      });
  }

  return (
    <form
      className="h-screen flex justify-center items-center"
      onSubmit={handleSubmit}
    >
      <Card className="w-[26rem] p-4">
        <CardHeader>
          <CardTitle className="text-2xl">Signup</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input name="name" id="name" />
          </div>

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
                I agree to the{' '}
                <Link href="/terms" className="text-primary">
                  Terms of Service
                </Link>
              </label>
            </div>
          </div>
          <Button color="primary" type="submit" className="w-full">
            Sign Up
          </Button>
          <div className="flex items-center gap-4 mx-4 pt-2">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <p className="text-center text-sm opacity-50">OR</p>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>
        </CardContent>

        <CardFooter className="gap-4 flex-col">
          <SocialLogin />

          <p className="text-center text-sm">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-primary">
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </form>
  );
}

export default Page;
