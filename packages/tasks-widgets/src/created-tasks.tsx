export function CreatedTasks() {
  return (
    <>
      <h3 className="text-lg font-semibold">My Created Tasks</h3>
      <p className="text-sm text-gray-500">Tasks you have created</p>
      <div className="grid gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-gray-300" />
            <span className="text-sm font-medium text-gray-600">
              Update website copy
            </span>
          </div>
          <span className="rounded-md border border-gray-300 px-2 py-1 text-xs font-medium text-gray-600">
            Backlog
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-yellow-500" />
            <span className="text-sm font-medium text-gray-600">
              Fix mobile app bugs
            </span>
          </div>
          <span className="rounded-md border border-gray-300 px-2 py-1 text-xs font-medium text-gray-600">
            In Progress
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-sm font-medium text-gray-600">
              Implement new feature
            </span>
          </div>
          <span className="rounded-md border border-gray-300 px-2 py-1 text-xs font-medium text-gray-600">
            Done
          </span>
        </div>
      </div>
    </>
  );
}
