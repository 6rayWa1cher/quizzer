/*
  Warnings:

  - The primary key for the `FormField` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `FormResponse` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `form_id` to the `FormFieldOption` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FormFieldOption" DROP CONSTRAINT "FormFieldOption_form_field_id_fkey";

-- AlterTable
ALTER TABLE "FormField" DROP CONSTRAINT "FormField_pkey",
ADD CONSTRAINT "FormField_pkey" PRIMARY KEY ("id", "form_id");

-- AlterTable
ALTER TABLE "FormFieldOption" ADD COLUMN     "form_id" INTEGER NOT NULL,
ADD COLUMN     "value" VARCHAR(64) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "FormResponse" DROP CONSTRAINT "FormResponse_pkey",
ADD CONSTRAINT "FormResponse_pkey" PRIMARY KEY ("id", "form_id");

-- CreateTable
CREATE TABLE "FormResponseField" (
    "id" SERIAL NOT NULL,
    "form_field_id" INTEGER NOT NULL,
    "form_id" INTEGER NOT NULL,
    "form_response_id" INTEGER NOT NULL,

    CONSTRAINT "FormResponseField_pkey" PRIMARY KEY ("id","form_field_id","form_response_id")
);

-- AddForeignKey
ALTER TABLE "FormFieldOption" ADD CONSTRAINT "FormFieldOption_form_field_id_form_id_fkey" FOREIGN KEY ("form_field_id", "form_id") REFERENCES "FormField"("id", "form_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormResponseField" ADD CONSTRAINT "FormResponseField_form_field_id_form_id_fkey" FOREIGN KEY ("form_field_id", "form_id") REFERENCES "FormField"("id", "form_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormResponseField" ADD CONSTRAINT "FormResponseField_form_response_id_form_id_fkey" FOREIGN KEY ("form_response_id", "form_id") REFERENCES "FormResponse"("id", "form_id") ON DELETE RESTRICT ON UPDATE CASCADE;
