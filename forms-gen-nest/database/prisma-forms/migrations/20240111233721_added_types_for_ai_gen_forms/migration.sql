-- AlterTable
ALTER TABLE "Form" ADD COLUMN     "pending_id" TEXT;

-- AlterTable
ALTER TABLE "FormField" ADD COLUMN     "correct_response" TEXT;

-- CreateTable
CREATE TABLE "PendingForm" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "questions_count" INTEGER NOT NULL,
    "questions_done" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "PendingForm_pkey" PRIMARY KEY ("id")
);
