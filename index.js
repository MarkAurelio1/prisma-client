const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.user.create({
    data: {
      name: 'Marcos',
      email: 'marcos@marcos.com',
      posts: {
        create: { title: ' Hello World'},
      },
      profile:{
        create: { bio: 'Essa cara sou eu'},
      }
    }
  })
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    }
  })
  console.dir(allUsers, { depth: null})
  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })