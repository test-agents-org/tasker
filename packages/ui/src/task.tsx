import { formatRelative } from 'date-fns';
import { enUS } from 'date-fns/locale';
import type { Task } from '@tasker/database/model';
import { PlusIcon } from '@heroicons/react/24/solid';

const formatRelativeLocale = {
  lastWeek: 'dd/MM/yyyy',
  yesterday: "'yesterday'",
  today: "'today'",
  tomorrow: "'tomorrow'",
  nextWeek: 'dd/MM/yyyy',
  other: 'dd/MM/yyyy',
};

const locale = {
  ...enUS,
  formatRelative: (token: keyof typeof formatRelativeLocale) =>
    formatRelativeLocale[token],
};

interface TaskProps {
  task: Task;
}

export function TaskIndicator({ task: { status } }: TaskProps) {
  if (status === 'completed') {
    return <div className="h-2 w-2 rounded-full bg-green-300" />;
  } else if (status === 'in_progress') {
    return <div className="h-2 w-2 rounded-full bg-yellow-300" />;
  } else {
    return <div className="h-2 w-2 rounded-full bg-gray-300" />;
  }
}

export function TaskItem({ task }: TaskProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
        <TaskIndicator task={task} />
        {task.title}
      </div>
      <span className="rounded-md border border-gray-300 px-2 py-1 text-xs font-medium text-gray-600">
        Due{' '}
        {formatRelative(task.dueAt, new Date(), {
          locale,
        })}
      </span>
    </div>
  );
}

interface CreateTaskButtonProps {}

export function CreateTaskButton(props: CreateTaskButtonProps) {
  return (
    <div className="fixed bottom-6 right-6">
      <button className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        <PlusIcon className="mr-2 h-4 w-4" />
        New Task
      </button>
    </div>
  );
}
