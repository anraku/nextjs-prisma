import { NextPage } from "next"
import { useRouter } from "next/router"
import useSWR from "swr";

const fetcher = (id: string) => fetch(`/api/users/${id}`).then(res => res.json())

const User: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(id, fetcher);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
  <>
    <p>id: {data.id}</p>
    <p>name: {data.name}</p>
    <p>email: {data.email}</p>
  </>
  )
}

export default User;