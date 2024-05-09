import React, { JSX } from 'react';
import { cookies } from 'next/headers';
import { Sidebar } from '@tasker/sidebar';
import { CreatedTasks, MyTasks } from '@tasker/tasks-widgets';
import { db } from '@tasker/database';
import { getUserData } from '../api/auth/utils';
import { CreateTaskButton } from '@tasker/ui/task';

export const revalidate = 0;

export default async function Tasks(): Promise<JSX.Element> {
  const cookieStore = cookies();
  const userData = getUserData(cookieStore);
  const members = await db.user.findMany();
  const projects = await db.project.findMany();
  const myTasks = (
    await db.assigneesOnTasks.findMany({
      where: {
        assigneeId: userData.id,
      },
      include: {
        task: true,
      },
    })
  ).map((x) => x.task);
  const createdTasks = await db.task.findMany({
    where: {
      userId: userData.id,
    },
  });
  return (
    <div className="flex h-screen w-full">
      <div className="flex w-64 flex-col items-start justify-between border-r bg-white p-8">
        <Sidebar user={userData} />
      </div>
      <div className="w-full p-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="bg-white text-gray-900">
            <MyTasks tasks={myTasks} />
          </div>
          <div className="bg-white text-gray-900">
            <CreatedTasks tasks={createdTasks} />
          </div>
        </div>
      </div>
      <CreateTaskButton projects={projects} members={members} me={userData} />
    </div>
  );
}
