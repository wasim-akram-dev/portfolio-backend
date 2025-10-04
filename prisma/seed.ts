import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL || "owner@example.com";
  const password = process.env.ADMIN_PASSWORD || "StrongPassword123";
  const hashed = await bcrypt.hash(password, 10);

  await prisma.user.upsert({
    where: { email },
    update: { password: hashed },
    create: {
      email,
      name: "Portfolio Owner",
      password: hashed,
      role: "OWNER",
    },
  });

  console.log("Seed done: admin created/updated ->", email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
