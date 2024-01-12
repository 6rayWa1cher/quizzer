/*
  Warnings:

  - You are about to drop the column `correct_response` on the `FormField` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FormField" DROP COLUMN "correct_response",
ADD COLUMN     "correct_answer" TEXT;
