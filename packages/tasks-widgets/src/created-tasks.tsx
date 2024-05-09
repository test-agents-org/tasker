import { Task } from '@tasker/database/model';

interface CreatedTasksProps {
  tasks: Task[];
}

export function CreatedTasks(props: CreatedTasksProps) {
  return (
    <>
      <h3 className="text-lg font-semibold">My Created Tasks</h3>
      <p className="text-sm text-gray-500">Tasks you have created</p>
      <div className="grid gap-4">
        {props.tasks.map((t) => (
          <div key={t.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-gray-300" />
              <span className="text-sm font-medium text-gray-600">
                {t.title}
              </span>
            </div>
            <span className="title rounded-md border border-gray-300 px-2 py-1 text-xs font-medium capitalize text-gray-600">
              {t.slug}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
