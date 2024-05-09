import { JSX } from 'react';
import {
  ProjectsStatuses,
  TasksChart,
  TeamMembers,
  UpcomingTasks,
} from '@tasker/dashboard-widgets';

export default function Page(): JSX.Element {
  return (
    <main className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div className="bg-white text-gray-900">
        <UpcomingTasks />
      </div>
      <div className="bg-white text-gray-900">
        <TasksChart />
      </div>
      <div className="bg-white text-gray-900">
        <ProjectsStatuses />
      </div>
      <div className="bg-white text-gray-900">
        <TeamMembers />
      </div>
    </main>
  );
}
