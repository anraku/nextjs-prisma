import { NextPage } from "next";
import Link from "next/link";
import useSWR from "swr";
import { User } from "../api/users/types/user";

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Users: NextPage = () => {
  const { data, error } = useSWR("/api/users", fetcher);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  console.log(data)

  return (
    <>
      <ul>
        {data.map((user: User) => <li key={user.id}>
          <Link key={user.id} href={`/users/${user.id}`}>{user.name}</Link>
        </li>
        )}
      </ul><Link href="/users/new">add user</Link>
    </>
  )
}

export default Users;