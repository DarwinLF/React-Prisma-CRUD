/*
  Warnings:

  - You are about to alter the column `Price` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - The primary key for the `profiles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Name` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `ProfileID` on the `profiles` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[UserName]` on the table `Profiles` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `products` MODIFY `Price` FLOAT NOT NULL;

-- AlterTable
ALTER TABLE `profiles` DROP PRIMARY KEY,
    DROP COLUMN `Name`,
    DROP COLUMN `ProfileID`,
    ADD COLUMN `UserName` VARCHAR(60) NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX `Profiles_UserName_key` ON `Profiles`(`UserName`);
