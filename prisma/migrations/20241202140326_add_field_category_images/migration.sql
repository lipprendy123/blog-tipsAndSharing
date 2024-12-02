/*
  Warnings:

  - Added the required column `category_images` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "category_images" VARCHAR(255) NOT NULL;
