-- CreateTable
CREATE TABLE "animal" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "scientific_name" VARCHAR(150) NOT NULL,
    "description" TEXT,
    "url_image" TEXT,
    "url_info" TEXT,
    "habitadId" INTEGER NOT NULL,
    "riskstatusId" INTEGER NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdated" TIMESTAMP(3) NOT NULL,
    "url_asosiacion" TEXT,

    CONSTRAINT "animal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habitad" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(60) NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "habitad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estado_riesgo" (
    "id" SERIAL NOT NULL,
    "estado_riesgo" VARCHAR(60) NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "estado_riesgo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "habitad_name_key" ON "habitad"("name");

-- CreateIndex
CREATE UNIQUE INDEX "estado_riesgo_estado_riesgo_key" ON "estado_riesgo"("estado_riesgo");

-- AddForeignKey
ALTER TABLE "animal" ADD CONSTRAINT "animal_habitadId_fkey" FOREIGN KEY ("habitadId") REFERENCES "habitad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "animal" ADD CONSTRAINT "animal_riskstatusId_fkey" FOREIGN KEY ("riskstatusId") REFERENCES "estado_riesgo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
