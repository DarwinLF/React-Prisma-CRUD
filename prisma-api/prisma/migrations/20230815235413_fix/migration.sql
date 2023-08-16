-- AlterTable
ALTER TABLE `clients` ADD COLUMN `UserName` VARCHAR(191) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `products` ADD COLUMN `UserName` VARCHAR(191) NOT NULL DEFAULT '';

-- AddForeignKey
ALTER TABLE `Clients` ADD CONSTRAINT `Clients_UserName_fkey` FOREIGN KEY (`UserName`) REFERENCES `Profiles`(`UserName`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_UserName_fkey` FOREIGN KEY (`UserName`) REFERENCES `Profiles`(`UserName`) ON DELETE RESTRICT ON UPDATE CASCADE;
