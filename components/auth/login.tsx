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

import Image from 'next/image';
import { useForm } from 'react-hook-form';

export function Login() {
  const form = useForm();

  return (
    <Form {...form}>
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@domain.com" {...field} />
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

          {/* <Button asChild variant="link">
            <Link href="#/auth/forgot-password">Forgot password?</Link>
          </Button> */}
        </CardContent>
        <CardFooter className="flex-col gap-4">
          <Button className="w-full">Submit</Button>
          {/* <Button asChild variant="link" className="w-full">
            <Link href="/auth/register">Don&apos;t have an account?</Link>
          </Button> */}
        </CardFooter>
      </Card>
    </Form>
  );
}
