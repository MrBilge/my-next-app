"use client";
import Link from "next/link";

export default async function Page() {
  const getOwnerData = async function () {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/3");

    if (!res.ok) {
      throw new Error("Data not found");
    }
    return res.json();
  };

  const data = await getOwnerData();

  return (
    <div>
      <Link href="/">
        <button className="p-4">←</button>
      </Link>

      <div className="flex justify-center items-center p-3 flex-col">
        <p>{data.address.city}</p>
        <p>{data.address.street}</p>
        <p>{data.address.suite}</p>
        <p>{data.address.zipcode}</p>
      </div>
    </div>
  );
}
