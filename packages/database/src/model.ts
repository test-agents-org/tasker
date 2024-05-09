import type {
  Prisma,
  User,
  Task,
  Project,
  AssigneesOnTasks,
} from '@prisma/client';
//
// export type TaskWithProject = Prisma.TaskGetPayload<{
//   include: {};
// }>;

export { User, Task, Project, AssigneesOnTasks };
