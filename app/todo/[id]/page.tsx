import Link from "next/link";

Link;
export default async function Page({ params }: { params: { id: string } }) {
  async function getData() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${params.id}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  async function getUsersData() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`);

    if (!res.ok) {
      throw new Error("Users not found");
    }

    return res.json();
  }

  const data = await getData();
  console.log(data);
  const userData = await getUsersData();

  return (
    <div>
      <Link href="/">
        <button className="p-4 size-20">←</button>
      </Link>
      <div className="flex justify-center items-center flex-col">
        {data.title}
        <div>
          <Link href={`${data.id}/owner`}>
            {userData.name}
          
          </Link>
          <p>
          {userData.email}
          </p>
      

        </div>
      </div>
    </div>
  );
}
