import type { Task } from '@tasker/database/model';
import { TaskItem } from '@tasker/ui/task';

interface MyTasksProps {
  tasks: Task[];
}

export function MyTasks(props: MyTasksProps) {
  return (
    <>
      <h3 className="mb-4 text-lg font-semibold">My Tasks</h3>
      <p className="mb-4 text-sm text-gray-500">Tasks assigned to you</p>
      <div className="grid gap-4" data-testid="my-tasks">
        {props.tasks.map((t) => (
          <TaskItem key={t.id} task={t} />
        ))}
      </div>
    </>
  );
}
