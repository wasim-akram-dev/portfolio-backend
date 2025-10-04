"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcryptjs_1 = require("bcryptjs");
const dotenv_1 = require("dotenv");
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
async function main() {
    const email = process.env.ADMIN_EMAIL || "owner@example.com";
    const password = process.env.ADMIN_PASSWORD || "StrongPassword123";
    const hashed = await bcryptjs_1.default.hash(password, 10);
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
//# sourceMappingURL=seed.js.map