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

app.listen(port, () => {    
    console.log(`Listening to requests on port ${port}`);
  });