-- CreateTable
CREATE TABLE "Sucursales" (
    "id_sucursal" SERIAL NOT NULL,
    "telefono" INTEGER NOT NULL,
    "calles" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "zona" TEXT NOT NULL,

    CONSTRAINT "Sucursales_pkey" PRIMARY KEY ("id_sucursal")
);

-- CreateTable
CREATE TABLE "Productos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precio" DECIMAL(65,30) NOT NULL,
    "peso_neto" DECIMAL(65,30) NOT NULL,
    "descuento" INTEGER NOT NULL,
    "foto" TEXT NOT NULL,

    CONSTRAINT "Productos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog" (
    "id_blog" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "id_productos" INTEGER NOT NULL,

    CONSTRAINT "blog_pkey" PRIMARY KEY ("id_blog")
);

-- CreateTable
CREATE TABLE "Promociones" (
    "id_promociones" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_fin" TIMESTAMP(3) NOT NULL,
    "descuento" INTEGER NOT NULL,
    "id_sucur" INTEGER NOT NULL,
    "id_produc" INTEGER NOT NULL,

    CONSTRAINT "Promociones_pkey" PRIMARY KEY ("id_promociones")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id_cliente" SERIAL NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "CI" INTEGER NOT NULL,
    "celular" INTEGER NOT NULL,
    "fecha_nac" TIMESTAMP(3) NOT NULL,
    "calles" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "zona" TEXT NOT NULL,
    "usuario" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "correo" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id_cliente")
);

-- CreateTable
CREATE TABLE "Venta" (
    "id_venta" SERIAL NOT NULL,
    "costo_total" DECIMAL(65,30) NOT NULL,
    "fecha_venta" TIMESTAMP(3) NOT NULL,
    "descuento" INTEGER NOT NULL,
    "id_client" INTEGER NOT NULL,

    CONSTRAINT "Venta_pkey" PRIMARY KEY ("id_venta")
);

-- CreateTable
CREATE TABLE "Detalle_Venta" (
    "id_detalle_venta" SERIAL NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "descuento" INTEGER NOT NULL,
    "tipo_pago" TEXT NOT NULL,
    "id_vent" INTEGER NOT NULL,
    "id_product" INTEGER NOT NULL,

    CONSTRAINT "Detalle_Venta_pkey" PRIMARY KEY ("id_detalle_venta")
);

-- CreateTable
CREATE TABLE "Administrador" (
    "id_administrador" SERIAL NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "celular" INTEGER NOT NULL,
    "fecha_nac" TIMESTAMP(3) NOT NULL,
    "calles" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "zona" TEXT NOT NULL,
    "usuario" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "id_client" INTEGER NOT NULL,

    CONSTRAINT "Administrador_pkey" PRIMARY KEY ("id_administrador")
);

-- AddForeignKey
ALTER TABLE "blog" ADD CONSTRAINT "blog_id_productos_fkey" FOREIGN KEY ("id_productos") REFERENCES "Productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Promociones" ADD CONSTRAINT "Promociones_id_sucur_fkey" FOREIGN KEY ("id_sucur") REFERENCES "Sucursales"("id_sucursal") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Promociones" ADD CONSTRAINT "Promociones_id_produc_fkey" FOREIGN KEY ("id_produc") REFERENCES "Productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Cliente"("id_cliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detalle_Venta" ADD CONSTRAINT "Detalle_Venta_id_vent_fkey" FOREIGN KEY ("id_vent") REFERENCES "Venta"("id_venta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detalle_Venta" ADD CONSTRAINT "Detalle_Venta_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "Productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Administrador" ADD CONSTRAINT "Administrador_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "Cliente"("id_cliente") ON DELETE RESTRICT ON UPDATE CASCADE;
