-- CreateEnum
CREATE TYPE "FormStatus" AS ENUM ('ok', 'deleted');

-- AlterTable
ALTER TABLE "Form" ADD COLUMN     "form_status" "FormStatus" NOT NULL DEFAULT 'ok';
