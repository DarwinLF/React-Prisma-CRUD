/*
  Warnings:

  - The primary key for the `products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ProductID` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `Quantity` on the `products` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[SKU]` on the table `Products` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Stock` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `products` DROP PRIMARY KEY,
    DROP COLUMN `ProductID`,
    DROP COLUMN `Quantity`,
    ADD COLUMN `SKU` VARCHAR(40) NOT NULL DEFAULT '',
    ADD COLUMN `Stock` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Products_SKU_key` ON `Products`(`SKU`);
