"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";

import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { tree } from "next/dist/build/templates/app-page";

const formSchema = z.object({
  ad: z.string().min(3, {
    message: "Adiniz en az 3 karakterden olusmalidir.",
  }),
  soyad: z.string().min(1, {
    message: "Soyadiniz en az 1 karakterden olusmalidir.",
  }),
  meslek: z.string().min(4, {
    message: "En az 4 karakterden olusmalidir.",
  }),
  email: z
    .string()
    .email("bu mail gecerli degil")
    .refine(
      (value) => value.endsWith("@bee.studio"),
      "Please correct add mail"
    ),

  tos: z.boolean().refine((value) => value === true, "please accept tos"),
});

export default function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ad: "Ahmet",
      soyad: "EYBEK",
      meslek: "software",
      email: "b.eybek@gmail.com",
      tos: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col justify-center items-center mt-10"
      >
        <FormField
          control={form.control}
          name="ad"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ad</FormLabel>
              <FormControl>
                <Input placeholder="Adinizi Girin" {...field} />
              </FormControl>
              <FormDescription>Kendi Adiniz</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="soyad"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Soy Ad</FormLabel>
              <FormControl>
                <Input placeholder="Soyad Giriniz" {...field} />
              </FormControl>
              <FormDescription>Kendi Soyadiniz</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="meslek"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Meslek</FormLabel>
              <FormControl>
                <Input placeholder="Meslek Giriniz" {...field} />
              </FormControl>
              <FormDescription>Kendi Mesleginiz</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email Giriniz" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tos"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Use different settings for my mobile devices
                </FormLabel>
                <FormDescription>Term of service</FormDescription>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button className="w-[200px]" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
