import { db } from '@tasker/database';
import type { JSX } from 'react';
import { notFound } from 'next/navigation';
import { ProjectDetails } from '@tasker/ui/project';

export default async function ProjectDetailsPage({
  params,
}: {
  params: { slug: string };
}): Promise<JSX.Element> {
  const project = await db.project.findUnique({
    where: { slug: params.slug },
  });

  if (!project) return notFound();

  const tasks = await db.task.findMany({
    where: {
      projectId: project.id,
    },
    include: {
      AssigneesOnTasks: true,
    },
  });

  return <ProjectDetails project={project} tasks={tasks} />;
}
