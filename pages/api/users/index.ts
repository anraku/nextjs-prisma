import { PrismaClient, users } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient();

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<users[]>
) {
  const data = await fetchUsers();
  res.status(200).json(data);
}

const fetchUsers = async () => {
  const allUsers = await prisma.users.findMany();
  return allUsers;
}