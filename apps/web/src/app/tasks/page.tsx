import React, { JSX } from 'react';
import { cookies } from 'next/headers';
import { CreatedTasks, MyTasks } from '@tasker/tasks-widgets';
import { db } from '@tasker/database';
import { getUserData } from '../api/auth/utils';

export const revalidate = 0;

export default async function Tasks(): Promise<JSX.Element> {
  const cookieStore = cookies();
  const userData = getUserData(cookieStore);
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
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      <div className="bg-white text-gray-900">
        <MyTasks tasks={myTasks} />
      </div>
      <div className="bg-white text-gray-900">
        <CreatedTasks tasks={createdTasks} />
      </div>
    </div>
  );
}
