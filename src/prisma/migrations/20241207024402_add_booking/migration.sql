/*
  Warnings:

  - Added the required column `seats` to the `Train` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Train" ADD COLUMN     "seats" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "trainId" INTEGER NOT NULL,
    "seatNumber" INTEGER NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_trainId_fkey" FOREIGN KEY ("trainId") REFERENCES "Train"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
