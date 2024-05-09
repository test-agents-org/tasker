'use client';

import { JSX, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@tasker/ui/toast';

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}
interface EmailAndPasswordFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function Login(): JSX.Element {
  const router = useRouter();
  const toast = useToast();
  const [failed, setFailed] = useState(false);
  const handleSubmit = async (evt: FormEvent<EmailAndPasswordFormElement>) => {
    evt.preventDefault();
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        body: JSON.stringify({
          email: evt.currentTarget.elements.email.value,
          password: evt.currentTarget.elements.password.value,
        }),
      });
      if (res.status >= 400) {
        setFailed(true);
      } else {
        toast.success('Signed in successfully');
        router.replace('/dashboard');
      }
    } catch (err) {
      console.error(err);
      setFailed(true);
    }
  };

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Welcome back</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your email and password to sign in.
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="block font-medium" htmlFor="email">
              Email
            </label>
            <input
              autoFocus
              className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-gray-600"
              id="email"
              placeholder="user@example.com"
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block font-medium" htmlFor="password">
                Password
              </label>
            </div>
            <input
              className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:ring-gray-600"
              id="password"
              required
              type="password"
            />
          </div>
          {failed ? (
            <div className="text-sm font-medium text-red-500">
              Incorrect email or password. Please try again.
            </div>
          ) : null}
          <button
            className="w-full rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-100 dark:focus:ring-offset-gray-950"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
