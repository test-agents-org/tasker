export function ProjectsStatuses() {
  return (
    <>
      <h3 className="text-lg font-semibold">Projects</h3>
      <p className="text-sm text-gray-500">Active projects and their status</p>
      <div className="grid gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-sm font-medium text-gray-600">
              Website Redesign
            </span>
          </div>
          <span className="rounded-md border border-gray-200 border-gray-300 px-2 py-1 text-xs font-medium text-gray-600 dark:border-gray-800">
            On Track
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-yellow-500" />
            <span className="text-sm font-medium text-gray-600">
              Mobile App
            </span>
          </div>
          <span className="rounded-md border border-gray-200 border-gray-300 px-2 py-1 text-xs font-medium text-gray-600 dark:border-gray-800">
            Behind Schedule
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-red-500" />
            <span className="text-sm font-medium text-gray-600">
              CRM Integration
            </span>
          </div>
          <span className="rounded-md border border-gray-200 border-gray-300 px-2 py-1 text-xs font-medium text-gray-600 dark:border-gray-800">
            At Risk
          </span>
        </div>
      </div>
    </>
  );
}
