import { useForm } from "react-hook-form";
import styles from "../Button/style.module.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Textarea } from "../ui/textarea";
import { useState } from "react";


const formSchema = z.object({
  FistName: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),

  HospitalName: z.string().min(1, {
    message: "company name must be at least 2 characters.",
  }),

  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactListForm({ onClose , title }) {
  const [selectedRole, setSelectedRole] = useState("");
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Country: "",
      Salutation: "",
      FirstName: "",
      LastName: "",
      email: "",
      HospitalName: "",
      message: "",
      ProductInterest: "",
      Speciality: "",
    },
  });


  const onSubmit = async (data) => {
    console.log(data);
    console.log("Form Submitted:", data);
    const formData = {
      //   Country: data.Country,
      //   Salutation: data.Salutation,
      FirstName: data.FirstName,
      LastName: data.LastName,
      email: data.email,
      HospitalName: data.HospitalName,
      message: data.message,
      //   ProductInterest: data.ProductInterest,
      Speciality: data.Speciality,
    };

    try {
      const res = await fetch("/api/healthcare", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        const errorResponse = await res.json();
        throw new Error(errorResponse.message || "Failed to send message");
      }

      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleValueChange = (value) => {
    setSelectedRole(value);
  };
  return (
    <section className="w-screen h-screen flex justify-center items-center fixed top-0 left-0 overflow-hidden bg-black/60 z-[999] fade-in " id="contact-other-forms">
      <div className="w-[75vw] h-[80%] bg-white relative py-[4vw] px-[2vw] rounded-[1vw]  overflow-hidden fadeup mobile:w-[90%] mobile:h-[70%] mobile:px-[5vw] mobile:py-[10vw] mobile:rounded-[4vw] tablet:rounded-[2vw] tablet:w-[80%] tablet:h-[70%] tablet:px-[2vw] tablet:py-[3vw] tablet:bottom-[4%]">
        <div
          data-lenis-prevent
          className="w-full h-[78%] overflow-scroll overflow-x-hidden px-[3vw] pb-[7vw] mobile:pb-[15vw]"
        >
            <h2 className="text-[3vw] aeonik !font-light mb-[2vw] tablet:text-[4.5vw] tablet:mb-[3vw] mobile:text-[7vw] mobile:mb-[7vw]">{title}</h2>
          <Form {...form}>
            <form className="space-y-8 relative z-[10]  " onSubmit={form.handleSubmit(onSubmit)}>
              <div>
                <Select onValueChange={handleValueChange}>
                  <SelectTrigger
                    aria-label="Select Country"
                    className="w-full mobile:text-[4vw]"
                  >
                    <SelectValue placeholder="Country*" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="India">India</SelectItem>
                      <SelectItem value="USA">USA</SelectItem>
                      <SelectItem value="China">China</SelectItem>
                      <SelectItem value="France">France</SelectItem>
                      <SelectItem value="Russia">Russia</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select onValueChange={handleValueChange}>
                  <SelectTrigger
                    aria-label="Select Title"
                    className="w-full mobile:text-[4vw]"
                  >
                    <SelectValue placeholder="Salutation*" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Mr.">Mr.</SelectItem>
                      <SelectItem value="Miss">Miss</SelectItem>
                      <SelectItem value="Mrs.">Mrs.</SelectItem>
                      <SelectItem value="Ms.">Ms.</SelectItem>
                      <SelectItem value="Dr.">Dr.</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="w-full flex gap-[2vw] mobile:flex-col mobile:gap-[8vw]">
                <FormField
                  control={form.control}
                  name="FirstName"
                  render={({ field }) => (
                    <FormItem className="required">
                      <FormControl>
                        <Input
                          placeholder="First Name*"
                          {...field}
                          className="w-[31vw] tablet:w-[34vw] mobile:w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="LastName"
                  render={({ field }) => (
                    <FormItem className="required">
                      <FormControl>
                        <Input
                          placeholder="Last Name*"
                          {...field}
                          className="w-[31.8vw] tablet:w-[34vw] mobile:w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="required">
                    {/* <FormLabel>Business Email</FormLabel> */}
                    <FormControl>
                      <Input placeholder="Email*" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="HospitalName"
                render={({ field }) => (
                  <FormItem className="required">
                    <FormControl>
                      <Input placeholder="Hospital Name*" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="ProductInterest"
                render={({ field }) => (
                  <FormItem className="required">
                    <FormControl>
                      <Input
                        placeholder="Primary Product of Interest*"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Speciality"
                render={({ field }) => (
                  <FormItem className="required">
                    <FormControl>
                      <Input placeholder="Speciality" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Select onValueChange={handleValueChange}>
                <SelectTrigger aria-label="Select Service" className="w-full">
                  <SelectValue placeholder="Type Of Interest*" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Connect to business representative">Connect to business representative</SelectItem>
                    <SelectItem value="Customer service">Customer service</SelectItem>
                    <SelectItem value="Price Request">Price Request</SelectItem>
                    <SelectItem value="Product Brochure/Information">Product Brochure/Information</SelectItem>
                    <SelectItem value="Product Demo">Product Demo</SelectItem>
                    <SelectItem value="Product Trial">Product Trial</SelectItem>
                    <SelectItem value="Purchase Request">Training</SelectItem>
                    <SelectItem value="other">other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Additional Comments" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="text-[1.1vw] mt-[2vw] font-light tablet:text-[2vw] mobile:text-[4vw]">
                The personal data collected on this form, will be used to
                validate your request & also manage our relationship with you.
                Where you have provided your consent we will use your email
                address and/or phone number, to provide you with information
                about our medical products, services, and scientific
                information, and information about local and/or international
                medical events. Your personal data maybe be transferred to
                countries outside of your country of residence, which may
                provide for different data protection rules than those in your
                country. For more information about AMS privacy practices and
                how it collects, processes, discloses, and retains your personal
                data, please read our Privacy Policy.
              </p>
              <div className="mt-[2vw] w-full flex justify-end">
                <Button type="submit">
                  <div className={`${styles.btn}  !border-gray-200`}>
                    <div aria-hidden="true" className={styles.btnCircle}>
                      <div className={styles.btnCircleText}>
                        <svg
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={styles.btnIcon}
                        >
                          <path
                            data-v-f4363f2a
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z"
                            className={`${styles.btnPath}`}
                          />
                          <path
                            data-v-f4363f2a
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z"
                            className={`${styles.btnPath}`}
                          />
                        </svg>
                      </div>
                    </div>
                    <span className={styles.btnText}>Submit</span>
                  </div>
                </Button>
              </div>
            </form>
          </Form>
        <div className="absolute bottom-0 opacity-50 left-0 w-full h-[10vw] z-[0] mobile:h-[20vw]">
            <div className="absolute bottom-0 opacity-50 left-0 w-full h-[10vw] z-[1] bg-gradient-to-b from-white to-black"></div>
            <Image src={"/assets/contact/plant-bg.jpg"} alt="plant-bg" fill className="object-cover"/>

        </div>
        </div>
      </div>
      <button
        className="absolute flex right-[5%] top-[5%]  items-center gap-3 z-[999]"
        onClick={onClose}
      >
        <span className="w-[2.2vw] h-[2.2vw] flex justify-center items-center p-2 border border-head rounded-full tablet:w-[4vw] tablet:h-[4vw] mobile:w-[10vw] mobile:h-[10vw] mobile:p-[2.8vw]">
          <Image
            src="/assets/icons/close-icon.svg"
            alt="Close Menu"
            className="invert"
            width={20}
            height={20}
          />
        </span>
      </button>
    </section>
  );
}
