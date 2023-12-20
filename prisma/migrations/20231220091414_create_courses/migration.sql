/*
  Warnings:

  - You are about to drop the column `studentId` on the `courses` table. All the data in the column will be lost.
  - Added the required column `student_id` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `courses` DROP FOREIGN KEY `courses_studentId_fkey`;

-- AlterTable
ALTER TABLE `courses` DROP COLUMN `studentId`,
    ADD COLUMN `student_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `courses` ADD CONSTRAINT `courses_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
