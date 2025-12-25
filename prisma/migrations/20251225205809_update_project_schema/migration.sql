/*
  Warnings:

  - Added the required column `category` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Made the column `thumbnail` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `liveUrl` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `repoUrl` on table `Project` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Project" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "challenges" TEXT,
ADD COLUMN     "improvements" TEXT,
ADD COLUMN     "plans" TEXT,
ADD COLUMN     "technologies" TEXT[],
ALTER COLUMN "thumbnail" SET NOT NULL,
ALTER COLUMN "liveUrl" SET NOT NULL,
ALTER COLUMN "repoUrl" SET NOT NULL;
