import { subWeeks } from 'date-fns';
import React, { JSX } from 'react';
import {
  ProjectsStatuses,
  TeamMembers,
  UpcomingTasks,
} from '@tasker/dashboard-widgets';
import { Sidebar } from '@tasker/sidebar';
import { getUserData } from '../api/auth/utils';
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { db } from '@tasker/database';
import { CreateTaskButton } from '@tasker/ui/task';

export default async function Page(req: NextRequest): Promise<JSX.Element> {
  const cookieStore = cookies();
  const userData = getUserData(cookieStore);
  const members = await db.user.findMany({
    include: { team: true },
  });
  const assignedTaskIds = (
    await db.assigneesOnTasks.findMany({
      where: {
        assigneeId: userData.id,
      },
    })
  ).map((a) => a.taskId);
  const tasks = await db.task.findMany({
    where: {
      id: { in: assignedTaskIds },
      dueAt: { gte: subWeeks(new Date(), 1) },
    },
  });
  return (
    <div className="flex h-screen w-full">
      <div className="flex w-64 flex-col items-start justify-between border-r bg-white p-8">
        <Sidebar user={userData} />
      </div>
      <div className="w-full p-8">
        <main className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="bg-white text-gray-900">
            <UpcomingTasks tasks={tasks} />
          </div>
          {/*<div className="bg-white text-gray-900">*/}
          {/*  <TasksChart />*/}
          {/*</div>*/}
          <div className="bg-white text-gray-900">
            <ProjectsStatuses />
          </div>
          <div className="bg-white text-gray-900">
            <TeamMembers me={userData} members={members} />
          </div>
        </main>
      </div>
      <CreateTaskButton />
    </div>
  );
}
