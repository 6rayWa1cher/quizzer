-- DropForeignKey
ALTER TABLE "FormField" DROP CONSTRAINT "FormField_form_id_fkey";

-- DropForeignKey
ALTER TABLE "FormFieldOption" DROP CONSTRAINT "FormFieldOption_form_field_id_form_id_fkey";

-- DropForeignKey
ALTER TABLE "FormResponse" DROP CONSTRAINT "FormResponse_form_id_fkey";

-- DropForeignKey
ALTER TABLE "FormResponseField" DROP CONSTRAINT "FormResponseField_form_field_id_form_id_fkey";

-- DropForeignKey
ALTER TABLE "FormResponseField" DROP CONSTRAINT "FormResponseField_form_response_id_form_id_fkey";

-- AddForeignKey
ALTER TABLE "FormField" ADD CONSTRAINT "FormField_form_id_fkey" FOREIGN KEY ("form_id") REFERENCES "Form"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormFieldOption" ADD CONSTRAINT "FormFieldOption_form_field_id_form_id_fkey" FOREIGN KEY ("form_field_id", "form_id") REFERENCES "FormField"("id", "form_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormResponse" ADD CONSTRAINT "FormResponse_form_id_fkey" FOREIGN KEY ("form_id") REFERENCES "Form"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormResponseField" ADD CONSTRAINT "FormResponseField_form_field_id_form_id_fkey" FOREIGN KEY ("form_field_id", "form_id") REFERENCES "FormField"("id", "form_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormResponseField" ADD CONSTRAINT "FormResponseField_form_response_id_form_id_fkey" FOREIGN KEY ("form_response_id", "form_id") REFERENCES "FormResponse"("id", "form_id") ON DELETE CASCADE ON UPDATE CASCADE;
