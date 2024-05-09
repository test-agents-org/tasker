const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient();

async function main() {
  console.log('Seeding data...');

  const engTeam = await db.team.upsert({
    where: { slug: 'ENG' },
    update: {},
    create: {
      slug: 'ENG',
      name: 'Engineering',
    },
  });

  const uxTeam = await db.team.upsert({
    where: { slug: 'UX' },
    update: {},
    create: {
      slug: 'UX',
      name: 'Design',
    },
  });

  const alice = await db.user.upsert({
    where: { email: 'alice@tasker.io' },
    update: {},
    create: {
      email: 'alice@tasker.io',
      name: 'Alice',
      teamId: engTeam.id,
      password: '123456',
    },
  });

  const bob = await db.user.upsert({
    where: { email: 'bob@tasker.io' },
    update: {},
    create: {
      email: 'bob@tasker.io',
      name: 'Bob',
      teamId: uxTeam.id,
      password: '123456',
    },
  });

  const uxTask1 = await db.task.upsert({
    where: { slug: 'UX-1' },
    update: {},
    create: {
      slug: 'UX-1',
      title: 'Wireframing',
      createdAt: new Date(),
      dueAt: new Date(),
      done: false,
      teamId: uxTeam.id,
      userId: bob.id,
    },
  });

  const uxTask2 = await db.task.upsert({
    where: { slug: 'UX-2' },
    update: {},
    create: {
      slug: 'UX-2',
      title: 'Customer Journey Mapping',
      createdAt: new Date(),
      dueAt: new Date(),
      done: false,
      teamId: uxTeam.id,
      userId: bob.id,
    },
  });

  const engTask1 = await db.task.upsert({
    where: { slug: 'ENG-1' },
    update: {},
    create: {
      slug: 'ENG-1',
      title: 'Landing page',
      createdAt: new Date(),
      dueAt: new Date(),
      done: false,
      teamId: engTeam.id,
      userId: bob.id,
    },
  });

  const engTask2 = await db.task.upsert({
    where: { slug: 'ENG-2' },
    update: {},
    create: {
      slug: 'ENG-2',
      title: 'Secondary page',
      createdAt: new Date(),
      done: false,
      teamId: engTeam.id,
      userId: alice.id,
    },
  });

  if (
    !(await db.assigneesOnTasks.findFirst({
      where: {
        assigneeId: alice.id,
        taskId: engTask1.id,
      },
    }))
  ) {
    await db.assigneesOnTasks.create({
      data: { assigneeId: alice.id, taskId: engTask1.id },
    });
  }

  if (
    !(await db.assigneesOnTasks.findFirst({
      where: {
        assigneeId: bob.id,
        taskId: uxTask1.id,
      },
    }))
  ) {
    await db.assigneesOnTasks.create({
      data: { assigneeId: bob.id, taskId: uxTask1.id },
    });
  }

  console.log('Seeding complete!');
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
