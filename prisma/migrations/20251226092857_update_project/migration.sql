/*
  Warnings:

  - You are about to drop the column `improvements` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `plans` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `repoUrl` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnail` on the `Project` table. All the data in the column will be lost.
  - The `category` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `imageAltText` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shortDescription` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnailUrl` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."ProjectCategory" AS ENUM ('FULLSTACK', 'FRONTEND', 'BACKEND');

-- AlterTable
ALTER TABLE "public"."Project" DROP COLUMN "improvements",
DROP COLUMN "plans",
DROP COLUMN "repoUrl",
DROP COLUMN "thumbnail",
ADD COLUMN     "backendRepoUrl" TEXT,
ADD COLUMN     "coverImageUrl" TEXT,
ADD COLUMN     "frontendRepoUrl" TEXT,
ADD COLUMN     "futurePlans" TEXT,
ADD COLUMN     "imageAltText" TEXT NOT NULL,
ADD COLUMN     "repositoryUrl" TEXT,
ADD COLUMN     "shortDescription" TEXT NOT NULL,
ADD COLUMN     "thumbnailUrl" TEXT NOT NULL,
ADD COLUMN     "videoUrl" TEXT,
ALTER COLUMN "liveUrl" DROP NOT NULL,
DROP COLUMN "category",
ADD COLUMN     "category" "public"."ProjectCategory" NOT NULL DEFAULT 'FULLSTACK';
