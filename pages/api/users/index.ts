import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from './types/user';

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  const data = await fetchUsers();
  res.status(200).json(data);
}

const fetchUsers = async (): Promise<User> => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  const users = res.data;
  return users;
}