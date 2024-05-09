import { UserWithTeam } from '@tasker/database/model';

interface TeamMembersProps {
  me: { id: number };
  members: UserWithTeam[];
}

export function TeamMembers(props: TeamMembersProps) {
  return (
    <>
      <h3 className="text-lg font-semibold">Team Members</h3>
      <p className="text-sm text-gray-500">Active team members</p>
      <div className="grid gap-4">
        {props.members.map((m) => (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height={32}
                  src={m.avatarBase64}
                  style={{
                    aspectRatio: '32/32',
                    objectFit: 'cover',
                  }}
                  width={32}
                />
              </div>
              <span className="text-sm font-medium text-gray-600">
                {m.name} {m.id === props.me.id ? <span>(You)</span> : null}
              </span>
            </div>
            <span className="rounded-md border border-gray-200 border-gray-300 px-2 py-1 text-xs font-medium text-gray-600 dark:border-gray-800">
              {m.team.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
