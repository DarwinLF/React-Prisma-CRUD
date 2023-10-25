-- CreateTable
CREATE TABLE `Profiles` (
    `UserName` VARCHAR(60) NOT NULL DEFAULT '',

    UNIQUE INDEX `Profiles_UserName_key`(`UserName`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Clients` (
    `ClientID` INTEGER NOT NULL AUTO_INCREMENT,
    `FirstName` VARCHAR(60) NOT NULL,
    `LastName` VARCHAR(60) NOT NULL,
    `UserName` VARCHAR(60) NOT NULL DEFAULT '',

    PRIMARY KEY (`ClientID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Products` (
    `SKU` VARCHAR(40) NOT NULL DEFAULT '',
    `Name` VARCHAR(60) NOT NULL,
    `Stock` INTEGER NOT NULL,
    `Price` FLOAT NOT NULL,
    `UserName` VARCHAR(60) NOT NULL DEFAULT '',

    UNIQUE INDEX `Products_SKU_key`(`SKU`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Clients` ADD CONSTRAINT `Clients_UserName_fkey` FOREIGN KEY (`UserName`) REFERENCES `Profiles`(`UserName`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_UserName_fkey` FOREIGN KEY (`UserName`) REFERENCES `Profiles`(`UserName`) ON DELETE CASCADE ON UPDATE CASCADE;
