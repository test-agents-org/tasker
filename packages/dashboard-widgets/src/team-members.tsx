export function TeamMembers() {
  return (
    <>
      <h3 className="text-lg font-semibold">Team Members</h3>
      <p className="text-sm text-gray-500">Active team members</p>
      <div className="grid gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <img
                alt="Avatar"
                className="rounded-full"
                height={32}
                src="/placeholder.svg"
                style={{
                  aspectRatio: '32/32',
                  objectFit: 'cover',
                }}
                width={32}
              />
              <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-green-500 ring-2 ring-white" />
            </div>
            <span className="text-sm font-medium text-gray-600">
              Sofia Davis
            </span>
          </div>
          <span className="rounded-md border border-gray-200 border-gray-300 px-2 py-1 text-xs font-medium text-gray-600 dark:border-gray-800">
            Product Manager
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <img
                alt="Avatar"
                className="rounded-full"
                height={32}
                src="/placeholder.svg"
                style={{
                  aspectRatio: '32/32',
                  objectFit: 'cover',
                }}
                width={32}
              />
              <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-green-500 ring-2 ring-white" />
            </div>
            <span className="text-sm font-medium text-gray-600">John Doe</span>
          </div>
          <span className="rounded-md border border-gray-200 border-gray-300 px-2 py-1 text-xs font-medium text-gray-600 dark:border-gray-800">
            Developer
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <img
                alt="Avatar"
                className="rounded-full"
                height={32}
                src="/placeholder.svg"
                style={{
                  aspectRatio: '32/32',
                  objectFit: 'cover',
                }}
                width={32}
              />
              <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-green-500 ring-2 ring-white" />
            </div>
            <span className="text-sm font-medium text-gray-600">
              Olivia Martin
            </span>
          </div>
          <span className="rounded-md border border-gray-200 border-gray-300 px-2 py-1 text-xs font-medium text-gray-600 dark:border-gray-800">
            Designer
          </span>
        </div>
      </div>
    </>
  );
}
