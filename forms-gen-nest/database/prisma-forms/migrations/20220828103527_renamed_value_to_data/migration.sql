/*
  Warnings:

  - You are about to drop the column `value` on the `FormResponseField` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FormResponseField" DROP COLUMN "value",
ADD COLUMN     "data" VARCHAR(256) NOT NULL DEFAULT '';
