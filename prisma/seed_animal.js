const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const animal = await prisma.animal.createMany({
      data: [
        {   
            name: "Lobo fino de las Galápagos", scientific_name: "Arctocephalus galapagoensis", 
            description: "Foca de Galápagos, Lobo de dos pelos de Galápagos, Lobo fino de Galápagos, Lobo fino de las Galápagos, Oso Marino de las Galápagos", 
            url_image: "https://inaturalist-open-data.s3.amazonaws.com/photos/25677704/large.jpg",
            url_info: "https://enciclovida.mx/especies/33935-arctocephalus-galapagoensis", 
            url_asosiacion: "http://www.hawksbill.org/es/sobre-nosotros/nuestro-equipo/organizaciones-asociadas/",
            habitadId: 2, riskstatusId: 3
        },
        {   
            name: "Tiburón coralino", scientific_name: "Carcharhinus perezii", 
            description: "Tiburón de arrecife", 
            url_image: "https://inaturalist-open-data.s3.amazonaws.com/photos/137461/large.jpg?1545363116",
            url_info: "https://europe.oceana.org/es/eu/que-hacemos/fauna-y-flora-marina/tiburones/especies-en-peligro/tiburon-coralino", 
            url_asosiacion: "http://www.hawksbill.org/es/sobre-nosotros/nuestro-equipo/organizaciones-asociadas/",
            habitadId: 2, riskstatusId: 3
            },
        {   
            name: "Espada de Monterrey", scientific_name: "Xiphophorus couchianus", 
            description: "Una descripcion jeje", 
            url_image: "https://inaturalist-open-data.s3.amazonaws.com/photos/15494451/large.jpeg", 
            url_info: "https://colombia.inaturalist.org/taxa/115170-Xiphophorus-couchianus", 
            url_asosiacion: "http://www.hawksbill.org/es/sobre-nosotros/nuestro-equipo/organizaciones-asociadas/",
            habitadId: 1, riskstatusId: 1
        },
        {   
            name: "Tiburón zorro común", scientific_name: "Alopias vulpinus", 
            description: "zotador, Tiburón ratón, Tiburón zorro común", 
            url_image: "https://static.inaturalist.org/photos/61205816/large.jpg", 
            url_info: "https://www.naturalista.mx/taxa/93696", 
            url_asosiacion: "http://www.hawksbill.org/es/sobre-nosotros/nuestro-equipo/organizaciones-asociadas/",
            habitadId: 2, riskstatusId: 4
        },
        {   
            name: "Tortuga Lora", scientific_name: "Lepidochelys kempii", 
            description: "También conocida como tortuga cotorra, tortuga golfina o tortuga bastarda, es uno de los animales en mayor peligro de extinción", 
            url_image: "https://energiahoy.com/wp-content/uploads/2021/06/Tortuga-lora.jpeg", 
            url_info: "http://www.iacseaturtle.org/docs/tortugas/lkempi.pdf", 
            url_asosiacion: "http://www.hawksbill.org/es/sobre-nosotros/nuestro-equipo/organizaciones-asociadas/",
            habitadId: 3, riskstatusId: 2
        },
        {  
             name: "León Marino", scientific_name: "Otariinae", 
            description: "Se localiza en las frías aguas costeras del Pacífico norte. Es el miembro más grande de la familia Otariid y la cuarta especie de foca más larga del mundo. ", 
            url_image: "https://energiahoy.com/wp-content/uploads/2021/06/Leo%CC%81n-marino-de-Steller-1024x679.png", 
            url_info: "https://www.sdnhm.org/oceanoasis/fieldguide/zalo-cal-sp.html", 
            url_asosiacion: "http://www.hawksbill.org/es/sobre-nosotros/nuestro-equipo/organizaciones-asociadas/",
            habitadId: 2, riskstatusId: 4
        },
        

      ]
    })

    console.log('Create 6 animales');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();