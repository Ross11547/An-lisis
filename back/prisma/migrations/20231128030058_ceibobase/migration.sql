/*
  Warnings:

  - You are about to alter the column `precio` on the `Productos` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `peso_neto` on the `Productos` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to drop the column `id_client` on the `Venta` table. All the data in the column will be lost.
  - You are about to alter the column `costo_total` on the `Venta` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to drop the `Administrador` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cliente` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_usu` to the `Venta` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Administrador" DROP CONSTRAINT "Administrador_id_client_fkey";

-- DropForeignKey
ALTER TABLE "Venta" DROP CONSTRAINT "Venta_id_client_fkey";

-- AlterTable
ALTER TABLE "Productos" ALTER COLUMN "precio" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "peso_neto" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Promociones" ALTER COLUMN "fecha_inicio" SET DATA TYPE TEXT,
ALTER COLUMN "fecha_fin" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Venta" DROP COLUMN "id_client",
ADD COLUMN     "id_usu" INTEGER NOT NULL,
ALTER COLUMN "costo_total" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "fecha_venta" SET DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "Administrador";

-- DropTable
DROP TABLE "Cliente";

-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" SERIAL NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "CI" INTEGER NOT NULL,
    "celular" INTEGER NOT NULL,
    "rol" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "correo" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_id_usu_fkey" FOREIGN KEY ("id_usu") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
