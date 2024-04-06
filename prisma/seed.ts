import { prisma } from '../src/lib/prisma';

async function seed() {
  await prisma.event.create({
    data: {
      id: 'e59aa0b7-6598-4217-928c-6ec621811959',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento p/ devs apaixonados(as) por código',
      maximumAttendees: 120,
    },
  });
}

seed().then(() => {
  console.log('Database seeded!');
});
