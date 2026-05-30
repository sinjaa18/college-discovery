/*
  Warnings:

  - Added the required column `closingRank` to the `College` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exam` to the `College` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "College" ADD COLUMN     "closingRank" INTEGER NOT NULL,
ADD COLUMN     "exam" TEXT NOT NULL;
