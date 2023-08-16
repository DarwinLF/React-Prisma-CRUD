/*
  Warnings:

  - You are about to alter the column `UserName` on the `clients` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(60)`.
  - You are about to alter the column `UserName` on the `products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(60)`.

*/
-- DropForeignKey
ALTER TABLE `clients` DROP FOREIGN KEY `Clients_UserName_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `Products_UserName_fkey`;

-- AlterTable
ALTER TABLE `clients` MODIFY `UserName` VARCHAR(60) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `products` MODIFY `UserName` VARCHAR(60) NOT NULL DEFAULT '';

-- AddForeignKey
ALTER TABLE `Clients` ADD CONSTRAINT `Clients_UserName_fkey` FOREIGN KEY (`UserName`) REFERENCES `Profiles`(`UserName`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_UserName_fkey` FOREIGN KEY (`UserName`) REFERENCES `Profiles`(`UserName`) ON DELETE CASCADE ON UPDATE CASCADE;
