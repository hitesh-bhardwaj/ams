/* eslint-disable no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { Textarea } from "@/components/ui/textarea"
import styles from "../Button/style.module.css"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";


const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("Form Submitted:", data);
    

    try {
      const res = await fetch("/api/formoem", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to send message");

      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-[7%] pb-[10%] mobile:pt-[15%] mobile:pb-[5%] tablet:pt-[10%] tablet:pb-[5%]" id="formoem">
        <div className="w-full h-full p-[4vw] rounded-[3vw] border border-gray-200 bg-white/50 mobile:bg-transparent mobile:hover:bg-transparent mobile:hover:shadow-none  mobile:border-none tablet:p-[5.5vw]">
      
     
          <div className="w-full flex flex-col gap-[2vw] mobile:w-full mobile:bg-white/50 mobile:rounded-[6vw] mobile:px-[7vw] mobile:py-[12vw] mobile:border mobile:gap-[5vw] mobile:justify-center tablet:w-full">
            <h3 data-para-anim className="aeonik text-[2.8vw] mobile:text-[8vw] mobile:text-center tablet:text-[4.5vw] font-light">Send a Message</h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-[2vw] mobile:space-y-[7vw] tablet:space-y-[3vw] mobile:w-full"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Name*" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Email*" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="number"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Mobile*" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Company Name*"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Company Name*" {...field} className={"pb-[1vw] mobile:pb-[2vw]"} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                      <Textarea placeholder="Message*" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full fadeUp flex justify-end pt-[2vw] mobile:flex mobile:justify-center tablet:flex tablet:justify-center">
                <div className={`${styles.btn}`}>
            <div aria-hidden="true" className={styles.btnCircle}>
                <div className={styles.btnCircleText}>
                {/* <span className={`block h-full w-full bg-gradient-to-r from-[#9E7BDF] via-[#ac26b0] to-blue-700 button-animate ${styles.buttonAnimate}`}/> */}
                    <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.btnIcon}>
                        <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className={`${styles.btnPath}`}/>
                        <path data-v-f4363f2a fillRule="evenodd" clipRule="evenodd" d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z" className={`${styles.btnPath}`} />
                    </svg>
                </div>
            </div>
            <span className={styles.btnText}>
                Submit
            </span>
        </div>
                </Button>
                
              </form>
            </Form>
          </div>
        </div>
     
    </section>
  );
}
