/*
  Warnings:

  - Added the required column `imageUrl` to the `facility` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `facility` ADD COLUMN `imageUrl` VARCHAR(2000) NOT NULL;
