'use client';

import { trpc } from '#/lib/trpc/client';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Input,
} from '@nextui-org/react';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import { TRPCClientError } from '@trpc/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { signInWithGithub } from '../login/action';

function Page() {
  const r = useRouter();
  const signUp = trpc.auth.signUp.useMutation();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    signUp
      .mutateAsync({ name, email, password })
      .catch((err) => {
        if (err instanceof TRPCClientError) {
          if (err.data.zodError) {
            const errors = err.data.zodError.fieldErrors ?? {
              unknonw: ['An error has occurred'],
            };
            const [first] = Object.keys(errors);
            toast.error(errors[first]);
          } else {
            toast.error(err.message);
          }
        }
      })
      .then(() => {
        toast.success('Account created successfully');
        r.push('/auth/login');
      });
  }

  return (
    <form
      className="h-screen flex justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <Card className="w-[26rem] p-4">
        <CardHeader>
          <h1 className="text-2xl font-semibold">Register an account</h1>
        </CardHeader>
        <CardBody className="space-y-4">
          <Input label="Name" name="name" />
          <Input label="Email" name="email" />
          <Input label="Password" type="password" name="password" />
          <div className="flex justify-between">
            <Checkbox>Remember me</Checkbox>
          </div>
          <Button color="primary" type="submit" isLoading={signUp.isPending}>
            Create account
          </Button>
        </CardBody>

        <div className="flex items-center gap-4 mx-4">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <p className="text-center text-sm opacity-50">OR</p>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        <CardFooter className="gap-4 flex-col">
          <div className="space-y-2">
            <Button
              fullWidth
              variant="bordered"
              startContent={<FcGoogle size={20} />}
            >
              Continue with Google
            </Button>
            <Button
              fullWidth
              variant="bordered"
              startContent={<FaGithub size={20} />}
              onClick={async () => {
                await signInWithGithub();
              }}
            >
              Continue with Github
            </Button>
          </div>

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
