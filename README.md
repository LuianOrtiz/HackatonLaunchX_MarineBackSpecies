# Backend MarineWell
##  Hackaton LaunchX
- Team Leons Monarcas
    - [@LuianOrtiz](https://github.com/LuianOrtiz)
    - [@FernandoArceo](https://github.com/FerchoArceo)
    - [@KarlaNavarrete](https://github.com/KarlaINZ25)
    - [@AlejandroTrinidad](https://github.com/AlejandroTrinidad97)
    - [@SalmaGuitierrez](https://github.com/Pagutri)

### Tecnologías utilizadas
    - ExpressJS
    - PrismaORM
    - CORS

### Project setup
- Clonar el proyecto
    `
        git clone https://github.com/LuianOrtiz/HackatonLaunchX_MarineBackSpecies
    `
- Instalar dependencias
    ` npm install `

- Inicializa primsa
    `npx prisma init`
    te crea un archivo **.env** , ve y agrega
    ```
    DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
    ```  
    
    ````
    donde 
    johndoe sería tu usuario
    randompassowrd la contraseña del usuario
    mydb el nombre de tu base de datos
    ````
    Usar otro motor de base de datos -> [documentación de prisma](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-node-mysql) 

- Corre la migración a la Base de datos
    `npx prisma migrate dev --name init` 

- Inicializa los seed's en esta secuencía para agregar datos a nuestra db
    ```
    node prisma\seed_habitad.js
    node prisma\seed_estadoriesgo.js
    node prisma\seed_animal.js
    ```

- Corré tu server con
    `npm run developer`
Regresa al proyecto de frontend y continua con las instrucicones


