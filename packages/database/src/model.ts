import type {
  Prisma,
  User,
  Task,
  Team,
  AssigneesOnTasks,
} from '@prisma/client';

export type UserWithTeam = Prisma.UserGetPayload<{
  include: { team: true };
}>;

export { User, Task, Team, AssigneesOnTasks };
