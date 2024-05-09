'use client';

import { useRouter } from 'next/navigation';
import { PowerIcon } from '@heroicons/react/24/outline';

export function AuthLink() {
  const router = useRouter();
  const handleLogout = async () => {
    await fetch(`/api/auth`, {
      method: 'DELETE',
    });
    router.push('/login');
  };
  return (
    <>
      <PowerIcon className="mr-2 h-5 w-5 text-gray-600" />
      <button className="" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
}
