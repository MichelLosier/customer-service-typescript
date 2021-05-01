/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Company` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Company.name_unique" ON "Company"("name");
