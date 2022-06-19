import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { User } from "./types/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>,
) {
  const id = req.query.id as string;
  const data = await userFetch(id);
  res.status(200).json(data);
}

const userFetch = async (id: string) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = res.data;
  return data;
}