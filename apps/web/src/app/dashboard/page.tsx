import { JSX } from 'react';
import {
  ProjectsStatuses,
  TeamMembers,
  UpcomingTasks,
} from '@tasker/dashboard-widgets';
import { Sidebar } from '@tasker/sidebar';
import { getUserData } from '../api/auth/utils';
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';

export default async function Page(req: NextRequest): Promise<JSX.Element> {
  const cookieStore = cookies();
  const userData = getUserData(cookieStore);
  return (
    <div className="flex h-screen w-full">
      <div className="flex w-64 flex-col items-start justify-between border-r bg-white p-8">
        <Sidebar user={userData} />
      </div>
      <div className="w-full p-8">
        <main className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="bg-white text-gray-900">
            <UpcomingTasks />
          </div>
          {/*<div className="bg-white text-gray-900">*/}
          {/*  <TasksChart />*/}
          {/*</div>*/}
          <div className="bg-white text-gray-900">
            <ProjectsStatuses />
          </div>
          <div className="bg-white text-gray-900">
            <TeamMembers />
          </div>
        </main>
      </div>
    </div>
  );
}
