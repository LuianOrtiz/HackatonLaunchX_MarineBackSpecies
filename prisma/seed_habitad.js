const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const habitad = await prisma.habitad.createMany({
      data: [
        {name: "Costas"},
        {name: "Mares"},
        {name: "Marisma"},
        {name: "Lénticos"},
        {name: "Lóticos"},

      ]
    })

    console.log('Create 5 estado_riesgos');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();