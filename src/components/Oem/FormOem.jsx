/* eslint-disable no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
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

export default function FormOem() {
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
    <section className="py-[7%] mobile:py-[15%]" id="formoem">
        <div className="w-full h-full py-[7vw] rounded-[3vw] border border-gray-200 glassmorsphism bg-white/50 group hover:bg-white transition-all duration-300">
      <div className="container-lg w-full h-full flex justify-center items-center  font-light">
        <div className="w-[75%] flex gap-[12vw] mobile:flex-col mobile:w-full mobile:items-center tablet:w-[85%]">
          <div className="w-[45%] flex flex-col gap-[2vw] mobile:w-full mobile:gap-[5vw] ">
            <h3 data-para-anim className="text-[2.8vw] aeonik mobile:text-[10vw] mobile:text-center tablet:text-[5vw] ">Get in Touch</h3>
            <p data-para-anim className="text-[1.3vw] mobile:text-[4.5vw] mobile:text-center tablet:text-[2.2vw] ">
              Want to Learn More About Our OEM Services? Get in touch with us:
            </p>
            <div className="flex flex-col mt-[2vw]">

            <div className="flex mobile:w-full mobile:justify-center ">
            <p data-para-anim className="text-[1.3vw] mobile:text-[4.5vw] tablet:text-[2.2vw] ">Email:</p>
              <Link  href="mailto:OEMservices@AMS.com" className="text-[1.3vw] mobile:text-[4.5vw] tablet:text-[2.2vw]">
                <span data-para-anim className="block">OEMservices@AMS.com</span>
              </Link>
            </div>
            <div className="flex mobile:w-full mobile:justify-center">
            <p className="text-[1.3vw] mobile:text-[4.5vw] tablet:text-[2.2vw]">Phone:</p>
              <Link href="tel:+91 25145 66145" className="text-[1.3vw] mobile:text-[4.5vw] tablet:text-[2.2vw]">
               <span data-para-anim className="block">+91 25145 66145</span>
              </Link>
            </div>
            </div>
          </div>
          <div className="w-[30%] flex flex-col gap-[2vw] mobile:w-[90%] mobile:bg-white mobile:rounded-[9vw] mobile:px-[10vw] mobile:py-[15vw] mobile:border mobile:items-center tablet:w-[40%]">
            <h3 data-para-anim className="aeonik text-[2.5vw] mobile:text-[9vw] mobile:text-center tablet:text-[4.5vw]">Send Message</h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-[1.5vw] mobile:space-y-[5vw] tablet:space-y-[3vw]"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
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
                        <Input placeholder="Email" {...field} />
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
                        <Input placeholder="Message" {...field} className={"pb-[4vw]"} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full fadeUp">
                <div className={`min-w-[11vw] w-fit h-fit group text-center relative py-[0.9vw] px-[3vw] rounded-full group bg-[#9E7BDF] overflow-hidden block mobile:min-w-[40vw] mobile:py-[3vw] mobile:mt-[10vw]`}>
                  <div className="h-full w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-300">
                    <span className="block h-full w-full bg-gradient-to-r from-[#9E7BDF] via-[#ac26b0] to-blue-700 button-animate"/>
                  </div>
                    <span className="text-[1.15vw] aeonik text-center text-white block relative z-[1] tablet:text-[2vw] mobile:text-[4.5vw] mobile:font-light">Submit</span>
                </div>
                </Button>
                
              </form>
            </Form>
          </div>
        </div>
      </div>
            
        </div>
    </section>
  );
}
