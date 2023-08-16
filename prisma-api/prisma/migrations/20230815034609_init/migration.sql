/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `users`;

-- CreateTable
CREATE TABLE `Profiles` (
    `ProfileID` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(60) NOT NULL,

    PRIMARY KEY (`ProfileID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
