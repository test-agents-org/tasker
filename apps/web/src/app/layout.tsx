import React, { JSX, ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Sidebar } from '@tasker/sidebar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tasker',
  description: 'Task Management app',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen w-full">
          <div className="flex w-64 flex-col items-start justify-between border-r bg-white p-8">
            <Sidebar />
          </div>
          <div className="w-full p-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
