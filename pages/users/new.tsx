import axios from "axios";
import { NextPage } from "next";
import { useRouter } from 'next/router';
import { stringify } from "querystring";

const New: NextPage = () => {
  const router = useRouter();
  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string },
      email: { value: string },
    };
    const name = target.name.value;
    const email = target.email.value;

    const data = await axios.post("/api/users/new", { name, email });
    if (data.status === 200) {
      router.push("/users");
    } else {
      console.log(data);
    }
  }

  return (
    <div>
      <h1>New User</h1>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type="text" id="name" name="name" />
        <label>Email</label>
        <input type="email" id="email" name="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default New;