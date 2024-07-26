import Link from "next/link";

export default async function Todos() {
  async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  const data = await getData();

  return (
    <main className="flex justify-center items-center flex-col m-5 ">
      {data.map((item: { id: number; title: string; completed: boolean }) => (
        <Link href={`/todo/${item.id}`}>
          <div key={item.id}>
            <h3>{item.title}</h3>
          </div>
        </Link>
      ))}
    </main>
  );
}
