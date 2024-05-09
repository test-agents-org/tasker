import type {
  Prisma,
  User,
  Task,
  Project,
  AssigneesOnTasks,
} from '@prisma/client';

export type TaskWithAssigneesOnTasks = Prisma.TaskGetPayload<{
  include: {
    AssigneesOnTasks: true;
  };
}>;

export { User, Task, Project, AssigneesOnTasks };
