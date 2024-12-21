/* eslint-disable no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import styles from "../Button/style.module.css"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";


const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),

});

export default function CareerForm({ onClose }) {
  const [fileName, setFileName] = useState(null);
  const [fileError, setFileError] = useState(null);
  const [content, setContent] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false); // State for alert visibility
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      filename: null,
    },
  });
  
  const fileRef = form.register("file");
  
  const onSubmit = async (data) => {
    if (!fileName) {
      setFileError("File is required.");
      return;
    }
    const base64Content = content.split(",")[1];
    const formData = {
      name: data.name,
      email: data.email,
      filename: fileName,
      content: base64Content,
    };
    
    try {
      const res = await fetch("/api/careerform", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to send message");
      
      form.reset();
      setFileName(null);
      setFileError(null);

      // Show alert for 2 seconds
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
        onClose(); // Call onClose after submission
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const onAddFileAction = (e) => {
    const reader = new FileReader();
    const files = e.target.files;

    reader.onload = (r) => {
      const fileContent = r.target.result.toString();
      setContent(fileContent);
      setFileName(files[0].name);
    };

    reader.readAsDataURL(files[0]);
  };

  return (
    <section
      className="fixed top-0 left-0 w-screen h-screen z-[998] flex justify-center items-center"
      id="formoem"
    >
      <div className="w-[50vw] h-[45vw] p-[4vw] pb-[25%] mobile:p-0 rounded-[3vw] border-gray-200 bg-white mobile:border-none tablet:p-[5.5vw] fadeUp relative overflow-hidden">
        {alertVisible && (
          <div className="fixed top-[5%] left-[50%] translate-x-[-50%] w-[80vw] rounded-[1vw] h-[5vw] bg-green-500 text-white flex justify-center items-center text-lg z-50">
            Form Submitted Successfully!
          </div>
        )}
        <div className="w-full flex flex-col gap-[2vw] mobile:w-full mobile:bg-white/50 mobile:rounded-[6vw] mobile:px-[7vw] mobile:py-[12vw] mobile:border mobile:gap-[5vw] mobile:justify-center tablet:w-full z-[5] relative">
          <h3
            data-para-anim
            className="aeonik text-[2.8vw] mobile:text-[8vw] mobile:text-center tablet:text-[4.5vw] font-light"
          >
            Submit Your Resume
          </h3>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-[2.5vw] mobile:space-y-[7vw] tablet:space-y-[3vw] mobile:w-full"
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
              <div className="w-full flex flex-col gap-[0.5vw] mobile:gap-[4vw]">
                <FormField
                  name="docs"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <p className="text-[1.2vw] ml-[0.65vw] aeonik font-light mobile:text-[3vw] tablet:text-[1.8vw]">
                          Upload Document
                        </p>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="w-full h-[4vw] border-b border-black/40 rounded-lg py-[1vw] mobile:h-[70vw] mobile:mt-[10vw] tablet:h-[30vw] tablet:mt-[4vw]">
                  <FormLabel
                    htmlFor="filename"
                    className="w-full h-full bg-white flex items-center justify-start rounded-lg cursor-pointer ml-[0.65vw]"
                  >
                    <div>
                      <div className=" w-[2vw] h-[2vw] relative flex flex-col items-center justify-center">
                        {!fileName ? (
                          <Image
                            src={"/assets/career/resume-upload-icon.svg"}
                            alt="upload-icon"
                            fill
                            className="object-contain"
                          />
                        ) : (
                          ""
                        )}
                      </div>
                      <p className="text-lg text-black/50 font-medium mobile:text-xl tablet:text-2xl">
                        {fileName || ""}
                      </p>
                    </div>
                  </FormLabel>
                  <FormField
                    control={form.control}
                    name="filename"
                    render={({ field }) => (
                      <FormItem className="h-full flex justify-center career flex-col">
                        <FormControl>
                          <Input
                            id="filename"
                            name="filename"
                            {...fileRef}
                            type="file"
                            accept=".pdf,.docx"
                            className="hidden"
                            onChange={onAddFileAction}
                          />
                        </FormControl>
                        {fileError && (
                          <p className="text-red-600 text-[1.1vw] tablet:text-[2vw] mobile:text-[3vw] mt-[1vw] mobile:mt-[4vw]">
                            {fileError}
                          </p>
                        )}
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full flex justify-end pt-[2vw] mobile:flex mobile:justify-center tablet:flex tablet:justify-center"
              >
                <div className={`${styles.btn} !border-gray-200`}>
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
            </form>
          </Form>
        </div>
        <div className="absolute bottom-[-37%] left-0 h-full w-full">
          <Image
            src={"/assets/career/career-form-bg.png"}
            alt="career-form-bg-image"
            fill
            className="object-contain bottom-0"
          />
        </div>
      </div>
    </section>
  );
}
