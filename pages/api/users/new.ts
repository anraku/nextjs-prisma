import { PrismaClient, users } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next/types";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{}>
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
  const data = await createUser(req.body);
  res.status(200).json(data);
}

const createUser = async (user: users) => {
  const data = await prisma.users.create({ data: user });
  return data;
}