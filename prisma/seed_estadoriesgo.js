const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const riesgo = await prisma.estado_riesgo.createMany({
      data: [
        {estado_riesgo: "Extindo en estado silvestre"},
        {estado_riesgo: "En peligro critico"},
        {estado_riesgo: "En peligro"},
        {estado_riesgo: "Vulnerable"},
        {estado_riesgo: "Cercanamente Amenazada"},
        {estado_riesgo: "Preocupación menor"},
      ]
    })

    console.log('Create 6 estado_riesgos');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();