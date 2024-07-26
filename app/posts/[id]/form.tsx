"use client";
import { useState } from "react";

const Form  = async ({userId}:{
  userId: boolean
}) => {
    
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  

  const handleAdd = async (event:any) => {
    event.preventDefault();
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
      })
  };
  return (
    <form className="mt-10 flex flex-col justify-between" onSubmit={handleAdd}>
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
      <button type="submit" className="border-[2px] mt-5">
        Add
       
      </button>
    </form>
  );
};

export default Form;
