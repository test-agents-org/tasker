import { User } from '@tasker/database/model';

interface TeamMembersProps {
  members: User[];
}

export function TeamMembers(props: TeamMembersProps) {
  return (
    <>
      <h3 className="mb-4 text-lg font-semibold">Team Members</h3>
      <p className="mb-4 text-sm text-gray-500">Active team members</p>
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
                {m.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
