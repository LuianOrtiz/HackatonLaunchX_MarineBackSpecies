const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const animal = await prisma.animal.createMany({
      data: [
        {   
            name: "Vaquita Marina", scientific_name: "", 
            description: "Se localiza en la reserva de la biosfera de las aguas mexicanas del Golfo de California, es uno de los cetáceos más pequeños del mundo (150 cm) con un peso promedio de 50 kg.", 
            url_image: "https://energiahoy.com/wp-content/uploads/2021/06/Vaquita-marina-1024x572.jpeg",
            url_info: "", 
            habitadId: 2, riskstatusId: 5
        },
        {   
            name: "Totoaba", scientific_name: "", 
            description: "", 
            url_image: "https://energiahoy.com/wp-content/uploads/2021/06/totoaba.jpeg",
            url_info: "Se localiza en el norte del Golfo de California de México. Este pez enfrenta desde hace décadas una dura caza furtiva porque su buche es muy codiciado en China. Su pesca supone el sustento principal de habitantes de pueblos como San Felipe o Puerto Peñasco Sonora.", 
            habitadId: 2, riskstatusId: 1
            },
        {   
            name: "Tortuga carey", scientific_name: "", 
            description: "La población ha disminuido hasta un 80% en los últimos años debido a la pesca desmesurada en China y Japón. Sin embargo, sobrevive en las zonas tropicales.", 
            url_image: "https://energiahoy.com/wp-content/uploads/2021/06/Tortuga_carey.jpeg", 
            url_info: "", 
            habitadId: 1, riskstatusId: 2
        },
        {   
            name: "Ballena azul", scientific_name: "", 
            description: "Con un tamaño que va de 24 a 30 metros y un peso de alrededor de 173 toneladas, la ballena azul se encuentra en la cima de la cadena alimenticia, con un papel importante para mantener el balance de los ecosistemas marinos. ", 
            url_image: "https://energiahoy.com/wp-content/uploads/2021/06/Ballena-azul.jpeg", 
            url_info: "", 
            habitadId: 2, riskstatusId: 2
        },
        {   
            name: "Tortuga Lora", scientific_name: "", 
            description: "También conocida como tortuga cotorra, tortuga golfina o tortuga bastarda, es uno de los animales en mayor peligro de extinción", 
            url_image: "https://energiahoy.com/wp-content/uploads/2021/06/Tortuga-lora.jpeg", 
            url_info: "", 
            habitadId: 3, riskstatusId: 3
        },
        {  
             name: "León Marino", scientific_name: "", 
            description: "Se localiza en las frías aguas costeras del Pacífico norte. Es el miembro más grande de la familia Otariid y la cuarta especie de foca más larga del mundo. ", 
            url_image: "https://energiahoy.com/wp-content/uploads/2021/06/Leo%CC%81n-marino-de-Steller-1024x679.png", 
            url_info: "", 
            habitadId: 2, riskstatusId: 4
        },
        

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