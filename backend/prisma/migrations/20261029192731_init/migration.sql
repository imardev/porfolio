-- CreateTable
CREATE TABLE "Proyecto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "web_url" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,

    CONSTRAINT "Proyecto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tecnologia" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Tecnologia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProyectoToTecnologia" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProyectoToTecnologia_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Proyecto_slug_key" ON "Proyecto"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Tecnologia_slug_key" ON "Tecnologia"("slug");

-- CreateIndex
CREATE INDEX "_ProyectoToTecnologia_B_index" ON "_ProyectoToTecnologia"("B");

-- AddForeignKey
ALTER TABLE "_ProyectoToTecnologia" ADD CONSTRAINT "_ProyectoToTecnologia_A_fkey" FOREIGN KEY ("A") REFERENCES "Proyecto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProyectoToTecnologia" ADD CONSTRAINT "_ProyectoToTecnologia_B_fkey" FOREIGN KEY ("B") REFERENCES "Tecnologia"("id") ON DELETE CASCADE ON UPDATE CASCADE;
