const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//Cors
const cors = require("cors");
const corsOptions = {
    origin: "http://192.168.1.64:8080"
};

app.use(cors(corsOptions));

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
      habitadId:  req.body.habitadId,
      riskstatusId: req.body.riskstatusId
    };
    try {
        console.log(animal);
        const message = 'Animal creado.';
        await prisma.animal.create({data: animal});
        return res.json({message});
    } catch (e) {
        console.log(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
  });

app.listen(port, () => {    
    console.log(`Listening to requests on port ${port}`);
  });