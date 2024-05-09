'use client';

export function UpcomingTasks() {
  return (
    <>
      <h3 className="text-lg font-semibold">Upcoming Tasks</h3>
      <p className="text-sm text-gray-500">Tasks due in the next 7 days</p>
      <div className="grid gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-indigo-500"
              id="task-1"
              type="checkbox"
            />
            <label
              className="text-sm font-medium text-gray-600"
              htmlFor="task-1"
            >
              Finish design mockups
            </label>
          </div>
          <span className="rounded-md border border-gray-200 border-gray-300 px-2 py-1 text-xs font-medium text-gray-600 dark:border-gray-800">
            Due Tomorrow
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-indigo-500"
              id="task-2"
              type="checkbox"
            />
            <label
              className="text-sm font-medium text-gray-600"
              htmlFor="task-2"
            >
              Prepare presentation
            </label>
          </div>
          <span className="rounded-md border border-gray-200 border-gray-300 px-2 py-1 text-xs font-medium text-gray-600 dark:border-gray-800">
            Due Friday
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-indigo-500"
              id="task-3"
              type="checkbox"
            />
            <label
              className="text-sm font-medium text-gray-600"
              htmlFor="task-3"
            >
              Review project roadmap
            </label>
          </div>
          <span className="rounded-md border border-gray-200 border-gray-300 px-2 py-1 text-xs font-medium text-gray-600 dark:border-gray-800">
            Due Next Week
          </span>
        </div>
      </div>
    </>
  );
}
