"use client";
import { useState } from "react";

const Form = ({ userId }: { userId: boolean }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleAdd = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);
    const delay = (ms : number) => new Promise(resolve => setTimeout(resolve, ms));

    await delay(5000)
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        userId
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (res.ok) {
      setSuccess(true);
    }

    setLoading(false);
    setTitle('');
    setBody('');
  };

  return (
    <form className="mt-10 flex flex-col justify-between" onSubmit={handleAdd}>
     {loading && <div className="mb-4  border-4 border-solid border-gray-300 border-t-4 border-t-green-500 rounded-full w-8 h-8 animate-spin"></div>}
      {success && <div className=" flex justify-center items-center h-10 mb-4  rounded-md text-center bg-green-500 text-cyan-100">Form successfully submitted!</div>}
      <input
        placeholder="Add title"
        className="border-[2px] h-[40px] w-[250px] p-[5px]"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Add body"
        className="border-[2px] h-[40px] w-[250px] p-[5px]"
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <p></p>
      <button disabled={loading} type="submit" className="border-[2px] mt-5">
        Add
      </button>
    </form>
  );
};

export default Form;