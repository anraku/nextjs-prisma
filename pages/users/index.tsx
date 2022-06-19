import { NextPage } from "next";
import useSWR from "swr";
import { User } from "../api/users/types/user";

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Users: NextPage = () => {
  const {data, error} = useSWR("/api/users", fetcher);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  console.log(data)

  return (
    <ul>
      {data.map((user: User) => 
        <li key={user.id}>{user.name}</li>)
      }
    </ul>
  )
}

export default Users;