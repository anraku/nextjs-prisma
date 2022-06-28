import { PrismaClient, users } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<users | null>,
) {
  const id = parseInt(req.query.id as string);
  const data = await userFetch(id);
  if (!data) {
    res.status(404).json(null);
    return;
  }
  res.status(200).json(data);
}

const userFetch = async (id: number) => {
  const user = await prisma.users.findUnique({ where: { id: id } });
  return user;
}