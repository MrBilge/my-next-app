import Link from "next/link";

export default async function Form() {
  const getPostData = async function () {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
      throw new Error("Not found Post");
    }

    return res.json();
  };

  const posts = await getPostData();

  return (
    <div className="flex flex-col justify-center items-center m-5">
      {posts.map((post: any) => (
        <Link key={post.id} href={`posts/${post.id}`}>
          <p>{post.title}</p>
        </Link>
      ))}
    </div>
  );
}

// Try
