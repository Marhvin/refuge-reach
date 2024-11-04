-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "dateDeleted" TIMESTAMP(3),
ADD COLUMN     "deletedByUserId" TEXT;

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_deletedByUserId_fkey" FOREIGN KEY ("deletedByUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
