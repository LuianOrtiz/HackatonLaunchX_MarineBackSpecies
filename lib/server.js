const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});



app.get('/animal', async (req, res) => {
    const allAnimals =  await prisma.animal.findMany();
    console.log(allAnimals);
    res.json(allAnimals);
});

app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
  });