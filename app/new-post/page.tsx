"use client";
import { Input} from "@/components/ui/input";
import { Button } from "@/components/ui/button"

import { useForm, SubmitHandler } from "react-hook-form";

export default async function NewPost() {
  interface IFormInput {
    title: string;
    body: string;
  }

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="flex flex-col justify-center items-center p-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("title", { required: true, minLength: 3 })} />
        <Input {...register("body", { required: true, minLength: 3 })} />
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
}
