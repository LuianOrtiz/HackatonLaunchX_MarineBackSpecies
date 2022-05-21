const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//Cors

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});



app.get('/animal', async (req, res) => {
    const allAnimals =  await prisma.animal.findMany({
        include: {
            riskstatus: true,
            habitad: true
        }
    });
    console.log(allAnimals);
    res.json(allAnimals);
});

app.post('/animal', async (req, res) => {
    const animal = {
      name: req.body.name,
      scientific_name: req.body.scientific_name,
      description: req.body.description,
      url_image:  req.body.url_image,
      url_info:  req.body.url_info,
      url_asosiacion: req.body.url_asoc,
      habitadId:  parseInt(req.body.habitadId, 10) ,
      riskstatusId: parseInt(req.body.riskstatusId, 10) ,
    };
    console.log(animal);
    const message = 'Animal creado.';
    await prisma.animal.createMany({data: animal});
    return res.json({message});
    
  });

app.listen(port, () => {    
    console.log(`Listening to requests on port ${port}`);
  });