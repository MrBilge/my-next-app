import Form from "./form";

export default async function Page({ params }: { params: { id: string } }) {
  async function getDataPost() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );

    if (!res.ok) {
      throw new Error();
    }

    return res.json();
  }

  const data = await getDataPost();

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <p>{data.id}</p>
      <p>{data.userId}</p>
      <p>{data.title}</p>
      <p>{data.body}</p>
      <Form userId={data.userId}  />
    </div>
  );
}
