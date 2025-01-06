'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { authenticate } from '@/lib/actions/auth';

import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useActionState } from 'react';
import { useForm } from 'react-hook-form';

export function Login() {
  const form = useForm();
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <Form {...form}>
      <form action={formAction}>
        <Card className="min-w-96 border-none shadow-none">
          <CardHeader className="flex gap-2 flex-col items-center">
            <Image src="/logo.svg" width={80} height={80} alt="logo" />
            <div className="text-center space-y-2">
              <CardTitle>Welcome</CardTitle>
              <CardDescription>
                Sign in to your account to continue
              </CardDescription>
            </div>
          </CardHeader>
          <div className="py-2" />
          <CardContent className="flex flex-col gap-4">
            <FormField
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="admin" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="**************"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {errorMessage && (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            )}
            {/* <Button asChild variant="link">
            <Link href="#/auth/forgot-password">Forgot password?</Link>
          </Button> */}
          </CardContent>
          <CardFooter className="flex-col gap-4">
            <Button className="w-full" disabled={isPending}>
              Submit
            </Button>
            {/* <Button asChild variant="link" className="w-full">
            <Link href="/auth/register">Don&apos;t have an account?</Link>
          </Button> */}
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
