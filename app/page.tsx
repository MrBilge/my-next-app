import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Todo from "@/components/Todos";

export default function Home() {
  return (
    <main className="flex flex-col    justify-between p-5">
      <Header />
      <Hero />
      <Todo />
      
    </main>
  );
}
