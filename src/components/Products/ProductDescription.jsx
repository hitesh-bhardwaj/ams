/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { paraAnim, fadeUp } from "../gsapAnimations";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProductDescription = ({className}) => {
  paraAnim();
  fadeUp();
  if (globalThis.innerWidth < 1024) {
  } else {
    useGSAP(() => {
      gsap.from(".product-description-card", {
        yPercent: 50,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: ".product-description-card-container",
          start: "top 80%",
          end: "bottom 40%",
        },
        stagger: 0.1,
      });
    });
  }
  return (
    <>
      <section
        className="mobile:py-[10%] tablet:pb-[10%]"
        id="product-description"
      >
        <div className="w-screen h-screen container-lg mobile:h-[70%] mobile:px-[3vw] mobile:py-[3vw]  tablet:h-full">
          <div className="flex flex-col items-center justify-center gap-[5vw]">
            <div className="mobile:mb-[8vw] tablet:mb-[5vw]">
              <h2
                data-para-anim
                className="title-2 aeonik mobile:text-center tablet:text-center"
              >
                Product Description
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-[2vw] product-description-card-container  tablet:justify-between">
              <div className="flex flex-col justify-between items-center w-[28vw] h-[16vw] product-description-card  border relative rounded-[2vw] glassmorphism mobile:w-[75vw] mobile:h-[90vw] mobile:flex-shrink-0 mobile:rounded-[9vw] tablet:w-[43vw] tablet:h-[30vw]">
                <div className="absolute top-0 right-10 w-[4.5vw] h-[4.5vw] flex justify-end items-center mobile:h-[20vw] mobile:w-[20vw]  mobile:right-[35%] tablet:w-[8vw] tablet:h-[8vw]">
                  <div className="w-full h-full p-[2vw] relative">
                    <div className={`w-[5vw] h-[5vw] ${className} mobile:h-[30vw] mobile:w-[30vw]`}>
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 85 81"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.6001 64C23.7001 63.1 24.9001 62.2 26.0001 61.3L26.3001 61.1L26.7001 61.4C27.1001 61.7 27.6001 62 28.0001 62.3C29.0001 63 30.1001 63.8 31.4001 64.4L31.9001 64.6C35.8001 66.3 40.3001 66.8 44.4001 65.8H45.0001C46.9001 65.1 48.8001 64.4 50.6001 63.3C55.0001 60.5 58.0001 56.3 59.1001 51.3L59.5001 49.6H65.5001V49.9C66.2334 51.3667 66.8001 52.4 67.2001 53C68.8001 55 70.9001 56.2 73.2001 56.6C76.6001 56.8 79.1001 56.2 81.1001 54.6C83.3001 52.7 84.4001 50.6 84.5001 48.4C84.5001 45.3 83.8001 43.2 82.1001 41.4C80.1001 39.5 78.0001 38.5 75.4001 38.5C72.4001 38.5 70.1001 39.3 68.4001 40.9L68.1001 41.2C67.3001 42 66.7001 42.9 66.2001 44L65.6001 45.5H59.6001V45.1C58.5001 40 56.4001 36.3 53.0001 33.5L52.6001 33.1C49.2001 30.3 45.1001 28.9 40.4001 28.9H40.1001C39.0001 28.9 37.7001 28.9 36.4001 29.2H36.0001C35.7001 29.4 35.3001 29.4 35.0001 29.5H34.7001C33.6001 29.9 32.5001 30.3 31.1001 30.9C30.9001 30.9 30.6001 31.1 30.3001 30.9C30.0001 30.7 29.8001 30.5 29.7001 30.4C29.2001 29.8 28.7001 29.2 28.3001 28.6L27.8001 27.9C27.0001 26.8 26.2001 25.8 25.4001 24.7C24.8001 24 24.3001 23.2 23.7001 22.5C22.9001 21.5 22.3001 20.7 21.7001 19.8L21.5001 19.5L21.8001 19.2C23.7001 17.1 24.7001 14.6 24.7001 11.6C24.7001 8.49998 23.6001 5.79998 21.8001 3.99998L21.4001 3.69998C20.8001 3.09998 20.3001 2.59998 19.7001 2.19998C15.4001 -0.900015 8.30011 -0.600015 4.70011 2.89998L3.90011 3.69998C1.80011 5.69998 0.600106 8.39998 0.600106 11.7C0.600106 14.8 1.70011 17.5 3.50011 19.3L3.90011 19.6C4.80011 20.5 5.70011 21.3 7.10011 22C10.2001 23.4 13.5001 23.6 16.3001 22.7L18.0001 22.2L18.6001 23L19.1001 23.6C19.3001 23.8 19.5001 24.1 19.7001 24.3L22.9001 28.5C23.4001 29.2 23.9001 29.8 24.4001 30.4L26.0001 32.4C26.3001 32.8 26.5001 33.1 26.6001 33.5C26.7001 34.1 26.6001 34.3 26.3001 34.7C24.0001 37 22.3001 39.6 21.5001 42.4L21.3001 43C20.0001 47.3 20.7001 52.2 23.3001 57.1L23.8001 58L23.4001 58.3C22.6001 58.9 21.8001 59.5 20.7001 60.3L20.2001 60.7C19.0001 61.6 17.8001 62.6 16.5001 63.7L15.8001 64.3L15.5001 64.1C13.8001 63.1 11.9001 62.6 10.0001 62.6C8.10011 62.6 8.70011 62.6 8.00011 62.8C5.50011 63.4 3.40011 64.8 1.90011 66.9C0.600107 69.1 0.200106 71.6 0.800106 74.1C1.60011 76.6 3.20011 78.6 5.40011 79.8C7.90011 81 10.6001 81.2 13.1001 80.5C15.7001 79.6 17.6001 78 18.7001 75.8C19.8001 73.5 20.0001 70.9 19.2001 69L18.6001 67.5L18.8001 67.3C19.2001 66.9 19.6001 66.5 20.0001 66.2L20.9001 65.5C21.4001 65.1 22.0001 64.7 22.5001 64.2L22.6001 64ZM70.2001 45.1L70.4001 44.8C70.5334 44.6 70.6668 44.4 70.8001 44.2C72.5001 42.4 75.3001 41.9 77.4001 43L77.8001 43.2C78.9001 43.9 79.7001 44.9 80.2001 46.3C80.4001 47.9 80.2001 49 79.7001 50.1L79.5001 50.4C78.8001 51.5 77.8001 52.2 76.3001 52.7C75.8001 52.7 75.4001 52.8 74.9001 52.8C73.9001 52.8 73.1001 52.6 72.4001 52.2L72.0001 52C70.9001 51.3 70.1001 50.3 69.6001 48.9C69.4001 47.3 69.6001 46.2 70.1001 45.1H70.2001ZM18.4001 16.8L18.1001 17.1C16.6001 18.5 14.9001 19.2 12.9001 19.2C10.5001 19.2 8.60011 18.5 7.20011 17.2L6.90011 16.9C5.50011 15.4 4.70011 13.8 4.70011 11.9C4.70011 9.59998 5.40011 7.79998 6.70011 6.39998L7.00011 6.09999C8.50011 4.69999 10.2001 3.99998 12.2001 3.99998C14.6001 3.99998 16.5001 4.69998 17.9001 5.99998L18.2001 6.29998C19.6001 7.79998 20.4001 9.39999 20.4001 11.3C20.4001 13.6 19.7001 15.4 18.4001 16.8ZM28.8001 37.5C34.0001 32.3 42.4001 31.3 48.6001 35.2C52.0001 37.5 54.4001 40.9 55.2001 44.7C55.9001 48.7 55.0001 52.7 52.7001 56C50.3001 59.2 46.6001 61.5 42.6001 62.1C41.8001 62.1 41.1001 62.2 40.3001 62.2C36.7001 62.2 33.4001 61.2 30.7001 59.2C27.4001 56.7 25.3001 53.2 24.9001 49.5C24.6001 44.6 25.9001 40.7 28.8001 37.5ZM14.9001 74.1L14.7001 74.4C14.0001 75.5 13.0001 76.2 11.5001 76.7C11.0001 76.7 10.6001 76.8 10.1001 76.8C9.10011 76.8 8.30011 76.6 7.60011 76.2L7.20011 76C6.10011 75.3 5.30011 74.3 4.80011 72.9C4.60011 71.3 4.80011 70.2 5.30011 69.1L5.50011 68.8C5.63344 68.6 5.76677 68.4 5.90011 68.2C7.60011 66.4 10.4001 65.9 12.5001 67L12.9001 67.2C14.0001 67.9 14.8001 68.9 15.3001 70.3C15.5001 71.9 15.3001 73 14.8001 74.1H14.9001Z"
                        fill= "currentColor"
                        fill-opacity="0.5"
                      />
                    </svg>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-10 left-10 flex flex-col justify-start gap-[1vw] mobile:static mobile:w-full mobile:h-full mobile:justify-end mobile:pb-[15vw] mobile:px-[5vw] mobile:text-center">
                  <p
                    data-para-anim
                    className="text-[1.65vw] font-medium mobile:text-[7.5vw] tablet:text-[3vw]"
                  >
                    Composition
                  </p>
                  <p
                    data-para-anim
                    className="text-[1.65vw] font-light mobile:text-[5vw] tablet:text-[2.5vw]"
                  >
                    90% Glycolide, 10% L-lactide
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between items-center w-[28vw] h-[16vw] product-description-card  border relative rounded-[2vw] glassmorphism mobile:w-[75vw] mobile:h-[90vw] mobile:flex-shrink-0 mobile:rounded-[9vw] tablet:w-[43vw] tablet:h-[30vw]">
                <div className="absolute top-10 right-10 w-[4.5vw] h-[4.5vw] flex justify-end items-center mobile:h-[20vw] mobile:w-[20vw]  mobile:right-[35%] tablet:w-[8vw] tablet:h-[8vw]">
                  <div className="w-full h-full relative">
                    <div className={`w-[5vw] h-[5vw] ${className} mobile:h-[30vw] mobile:w-[30vw]`}>
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 80 87"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M64.6 37.3L64.2 36.9C63.7 36.4 63.2 35.9 62.8 35.4C62.4 35 61.9 34.5 61.5 34.1C60.6 33.2 59.8 32.4 58.9 31.5L55.8 28.4C53.9 26.5 51.9 24.5 50 22.6C48.3 20.9 46.7 19.3 45 17.6C43.1 15.7 41.1 13.7 39.2 11.8L36.1 8.69999C35.2 7.79999 34.4 6.89999 33.5 6.09999L32.4 4.99999C31.9 4.49999 31.4 3.99999 30.9 3.49999L30.4 2.99999C29.7 2.29999 29.1 1.69999 28.3 1.19999C27.6 0.899989 27 0.899989 26.2 1.29999C25.6 1.79999 25.4 2.29999 25.2 3.09999C25.3 4.09999 25.6 4.49999 26.4 5.19999C26.8 5.59999 27.2 5.99999 27.6 6.39999L29 8.09999L8 29.2C7 30.2 5.89999 31.4 4.79999 32.5L4.5 32.8C2.2 35.3 0.900024 38.7 0.900024 42.4C1.00002 47.5 3.49998 51.1 7.59998 55.1C8.09998 55.6 8.59998 56.1 9.09998 56.6C9.99998 57.5 10.8 58.3 11.7 59.2C12.7 60.2 13.7 61.2 14.7 62.2L20.9 68.4C22.3 69.8 23.7 71.3 25.5 72.2C29.2 74 33.3 74.3 37 73.2L37.6 73C39.6 72.2 41.4 70.9 43.5 68.8L44.2 68.1C44.8 67.5 45.4 66.9 46.1 66.2C46.8 65.5 47.4 64.9 48.1 64.2C49.2 63.1 50.3 62 51.4 60.9C52.7 59.6 54 58.3 55.2 57C56.6 55.6 58 54.2 59.3 52.8L63.3 48.8C65.4 46.7 67 45.1 67 42.3C67 40.4 66.3 38.9 64.6 37.2V37.3ZM59.2 46.9L42 64.3C39.2 67.1 36.5 69.8 32 69.8C29.3 69.6 26.9 68.4 24.6 66.1L24.1 65.6C23.5 65 23 64.5 22.4 63.9L20.9 62.4C20.1 61.6 19.2 60.7 18.4 59.9C17.4 58.9 16.5 58 15.5 57C14.6 56.1 13.6 55.1 12.7 54.2L9.59998 51C8.09998 49.5 6.79998 48.1 6.09998 45.9L5.70001 44.6H59.9V45.5C60 46.2 59.8 46.5 59.3 46.9H59.2ZM5.40002 40.3L6 38.9C7.3 36.1 7.3 36 9.5 33.8L10.2 33.1C10.8 32.5 11.5 31.8 12.1 31.2L14.1 29.2C15.2 28.1 16.3 27 17.4 25.8C18.8 24.4 20.3 22.9 21.7 21.5L30.8 12.4C31.2 12 31.6 11.6 32.2 11.6C32.8 11.6 33.3 12 33.7 12.5L57.2 36.2C58 37 58.8 37.9 59.5 38.7L60.9 40.3H5.29999H5.40002Z"
                        fill= "currentColor"
                        fill-opacity="0.5"
                      />
                      <path
                        d="M63.8 57C60.3 61.2 58.1 65 56.9 68.8V69.2C56.3 70.8 56 72.3 56 74V74.6C56 75.5 56 76.4 56.2 77.3C57 80.2 58.8 82.8 61.2 84.4C64.1 86.1 67.3 86.5 70.7 85.7C73.5 84.9 76 83 77.6 80.4C79.3 77.2 79.5 73.6 78.3 69.3C76.5 63.6 72.7 56.4 68.5 54.2C68.2 54.2 67.9 54.1 67.6 54.1C66.8 54.1 66 54.5 65.3 55.3L65 55.6C64.7 56 64.4 56.3 64.1 56.7L63.8 57.1V57ZM65.1 62.4L65.4 62C65.8 61.5 66.1 61 66.5 60.5L66.8 60.1H68.2L68.5 60.5C68.7 60.8 68.9 61.1 69.1 61.4C72 65.3 75 70.1 74.6 75.3C74.3 77.3 73.3 78.9 71.6 80.3C70.3 81.2 68.9 81.6 67.3 81.6C65.7 81.6 66.5 81.6 66 81.6H65.9C63.8 81 62.2 79.8 61.1 77.9C60.1 75.6 60.3 72.9 60.8 71.1L61 70.6C61.9 67.9 63.3 65.2 65.2 62.4H65.1Z"
                        fill= "currentColor"
                        fill-opacity="0.5"
                      />
                    </svg>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-10 left-10 flex flex-col justify-start gap-[1vw] mobile:static mobile:w-full mobile:h-full mobile:justify-end mobile:pb-[15vw] mobile:px-[5vw] mobile:text-center">
                  <p
                    data-para-anim
                    className="text-[1.65vw] font-medium mobile:text-[7.5vw] tablet:text-[3vw]"
                  >
                    Colour
                  </p>
                  <p
                    data-para-anim
                    className="text-[1.65vw] font-light mobile:text-[5vw] tablet:text-[2.5vw]"
                  >
                    Undyed and Violet
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between items-center w-[28vw] h-[16vw] product-description-card  border relative rounded-[2vw] glassmorphism mobile:w-[75vw] mobile:h-[90vw] mobile:flex-shrink-0 mobile:rounded-[9vw] tablet:w-[43vw] tablet:h-[30vw]">
                <div className="absolute top-10 right-10 w-[4.5vw] h-[4.5vw] flex justify-end items-center mobile:h-[20vw] mobile:w-[20vw]  mobile:right-[35%] tablet:w-[8vw] tablet:h-[8vw]">
                  <div className="w-full h-full relative">
                    <div className={`w-[5vw] h-[5vw] ${className} mobile:h-[30vw] mobile:w-[30vw]`}>
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 78 75"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M77.7 59.9C77.7 58.5 77.7 57.1 77.7 55.7V52.3V50.8C77.7 47.7 77.7 44.6 77.7 41.6C77.7 39 77.7 36.3 77.7 33.7C77.7 30.6 77.7 27.5 77.7 24.4V22.9C77.7 21.8 77.7 20.6 77.7 19.5C77.7 18.1 77.7 16.7 77.7 15.3C77.7 14.6 77.7 13.9 77.7 13.2C77.7 12.5 77.7 11.9 77.7 11.2V10.5C77.7 7.40001 76.9 5.10001 75 3.20001C73.1 1.50001 70.8 0.600006 68 0.600006C67.6 0.600006 67.3 0.600006 66.9 0.600006C66.2 0.600006 65.5 0.600006 64.9 0.600006C64.2 0.600006 63.4 0.600006 62.7 0.600006C61.2 0.600006 59.8 0.600006 58.3 0.600006C57.1 0.600006 55.9 0.600006 54.7 0.600006H53.1C49.9 0.600006 46.6 0.600006 43.4 0.600006C40.6 0.600006 37.8 0.600006 35.1 0.600006C31.9 0.600006 28.6 0.600006 25.4 0.600006H20.3C18.8 0.600006 17.4 0.600006 15.9 0.600006H15.7C15 0.600006 14.3 0.600006 13.7 0.600006C13 0.600006 12.3 0.600006 11.6 0.600006H10.8C10.8 0.600006 10.8 0.600006 10.7 0.600006C7.49995 0.600006 5.09998 1.40001 3.09998 3.20001C1.29998 5.00001 0.400024 7.20001 0.400024 9.90001C0.400024 10.2 0.400024 10.6 0.400024 10.9C0.400024 11.5 0.400024 12.2 0.400024 12.8C0.400024 13.5 0.400024 14.2 0.400024 14.9C0.400024 16.3 0.400024 17.7 0.400024 19.1V22.5V24C0.400024 27.1 0.400024 30.2 0.400024 33.2C0.400024 35.8 0.400024 38.5 0.400024 41.1C0.400024 44.2 0.400024 47.3 0.400024 50.4V51.9C0.400024 53 0.400024 54.2 0.400024 55.3C0.400024 56.7 0.400024 58.1 0.400024 59.5C0.400024 60.2 0.400024 60.9 0.400024 61.6C0.400024 62.3 0.400024 62.9 0.400024 63.6V64.3C0.400024 67.4 1.19998 69.7 3.09998 71.6C5.09998 73.3 7.39998 74.2 10.1 74.2C10.5 74.2 10.8 74.2 11.2 74.2C11.9 74.2 12.6 74.2 13.3 74.2C14 74.2 14.8 74.2 15.5 74.2C17 74.2 18.4 74.2 19.9 74.2C24.7 74.2 29.5 74.2 34.2 74.2C37.2 74.2 40.2 74.2 43.1 74.2H69C71.1 74.2 73.3 73.3 75.1 71.6C76.9 69.8 77.8 67.6 77.8 64.9C77.8 64.6 77.8 64.2 77.8 63.9C77.8 63.3 77.8 62.6 77.8 62C77.8 61.3 77.8 60.6 77.8 59.9H77.7ZM74.2 13.6C74.2 14.3 74.2 15 74.2 15.6C74.2 16.9 74.2 18.3 74.2 19.6C74.2 21.2 74.2 22.7 74.2 24.3C74.2 27.1 74.2 29.9 74.2 32.7C74.2 35.4 74.2 38.2 74.2 40.9V64.6C74.2 66.3 73.7 67.7 72.6 68.9C71.2 70.2 69.5 70.8 67.2 70.8H66.5C65.7 70.8 64.8999 70.8 64.2 70.8C63.5 70.8 62.8 70.8 62 70.8C60.6 70.8 59.2001 70.8 57.8 70.8C56.1 70.8 54.5 70.8 52.8 70.8C49.8 70.8 46.9 70.8 43.9 70.8C41 70.8 38.1 70.8 35.3 70.8C32.1 70.8 29 70.8 25.8 70.8H20.8C19.4 70.8 17.9 70.8 16.5 70.8H16.2C15.6 70.8 14.9 70.8 14.3 70.8C13.6 70.8 12.9 70.8 12.3 70.8H11.6C9.09998 70.8 7.39995 70.5 5.69995 69C4.09995 67.4 3.80005 65.6 3.80005 63.9V63.2C3.80005 62.5 3.80005 61.7 3.80005 61C3.80005 60.3 3.80005 59.6 3.80005 59C3.80005 57.7 3.80005 56.3 3.80005 55C3.80005 53.4 3.80005 51.9 3.80005 50.3C3.80005 47.5 3.80005 44.7 3.80005 41.9C3.80005 39.2 3.80005 36.4 3.80005 33.7V10C3.80005 8.50001 4.2 7.40001 5 6.10001C6.4 4.50001 8.20005 3.70001 10.8 3.70001H11.5C12.3 3.70001 13.1 3.70001 13.8 3.70001C14.5 3.70001 15.2 3.70001 16 3.70001C17.4 3.70001 18.8 3.70001 20.2 3.70001C21.9 3.70001 23.5 3.70001 25.2 3.70001C28.2 3.70001 31.1 3.70001 34.1 3.70001C37 3.70001 39.9 3.70001 42.7 3.70001C45.9 3.70001 49 3.70001 52.2 3.70001H57.2C58.6 3.70001 60.1 3.70001 61.5 3.70001H61.8C62.4 3.70001 63.1 3.70001 63.7 3.70001C64.4 3.70001 65.1 3.70001 65.7 3.70001H66.4C66.4 3.70001 66.4 3.70001 66.5 3.70001C68.9 3.70001 70.6 4.00001 72.2 5.50001C73.7999 7.10001 74.1 8.90001 74.1 10.6V11.3C74.1 12 74.1 12.8 74.1 13.5L74.2 13.6Z"
                        fill= "currentColor"
                        fill-opacity="0.5"
                      />
                      <path
                        d="M28.9 60.8H29.3C30.1 60.8 30.6 60.8 31.3 60.4C31.7 60.1 31.8 60 31.9 59.6C32 59 31.9 58.6 31.5 58C30.7 57.6 29.9 57.5 28.8 57.5H28.2C27.5 57.5 26.9 57.5 26.2 57.5H24.8C23.6 57.5 22.4 57.5 21.1 57.5H20.1L20.6 57.1C21.9 55.9 23.1 54.8 24.4 53.6L26.3 51.8C26.9 51.2 27.6 50.6 28.2 50L28.9 49.3C29.3 49 29.6 48.7 29.9 48.3L30.2 48C30.7 47.6 31.1 47.2 31.4 46.7C31.7 46.1 31.8 45.8 31.6 45.1C31.2 44.6 30.8 44.4 30.1 44.3C29.3 44.4 28.8 44.7 28.2 45.2L27.9 45.5C27.6 45.8 27.2 46.1 26.9 46.5C26.7 46.7 26.4 47 26.2 47.2C25.6 47.8 24.9 48.4 24.3 49C23.6 49.6 23 50.2 22.3 50.8C21 52 19.7 53.2 18.5 54.4L17.7 55.2V46.6C17.5 46.3 17.5 46 17.5 45.7C17.4 45.2 17.2 45 16.8 44.6C16 44.3 15.5 44.2 14.8 44.6C14.3 45.2 14.1 45.6 14.1 46.4V46.8C14.1 47.2 14.1 47.7 14.1 48.1V49C14.1 49.7 14.1 50.3 14.1 51C14.1 51.8 14.1 52.7 14.1 53.5C14.1 54.2 14.1 54.8 14.1 55.5V56.4C14.1 56.9 14.1 57.3 14.1 57.8V58.2C14.1 59 14.1 59.6 14.6 60.2C15.1 60.6 15.6 60.7 16.4 60.7H16.8C17.3 60.7 17.7 60.7 18.2 60.7H19.2C19.9 60.7 20.6 60.7 21.3 60.7C22.2 60.7 23.1 60.7 24 60.7C24.7 60.7 25.4 60.7 26.1 60.7H27.1C27.6 60.7 28.1 60.7 28.6 60.7L28.9 60.8Z"
                        fill= "currentColor"
                        fill-opacity="0.5"
                      />
                      <path
                        d="M60.1999 27.9C60.1999 28.4 60.2 28.9 60.4 29.3C60.7 29.6 60.9 29.8 61.4 30.1C62 30.2 62.3 30.1 62.9 29.9C63.4 29.3 63.4999 28.9 63.5999 28.1V27.7C63.5999 27.3 63.5999 26.8 63.5999 26.4V25.5C63.5999 24.8 63.5999 24.2 63.5999 23.5C63.5999 22.7 63.5999 21.8 63.5999 21C63.5999 20.3 63.5999 19.7 63.5999 19V18.1C63.5999 17.6 63.5999 17.2 63.5999 16.7V16.3C63.5999 15.5 63.5999 14.9 63.0999 14.3C62.5999 13.9 62.2 13.8 61.4 13.8H60.9999C60.4999 13.8 60.0999 13.8 59.6999 13.8H58.6999C57.9999 13.8 57.3999 13.8 56.6999 13.8C55.7999 13.8 54.9999 13.8 54.0999 13.8C53.3999 13.8 52.6999 13.8 52.0999 13.8H51.0999C50.5999 13.8 50.1999 13.8 49.6999 13.8H49.3C48.5 13.8 48.1 13.8 47.4 14.2C47.1 14.5 46.9 14.6 46.8 15C46.7 15.6 46.7999 16 47.1999 16.6C47.9999 17 48.6999 17.1 49.6999 17.1H50.3C50.9 17.1 51.5999 17.1 52.1999 17.1H53.4999C54.6999 17.1 55.7999 17.1 56.9999 17.1H57.9999L57.5999 17.5C56.3999 18.7 55.1999 19.8 53.9999 21L52.0999 22.8C51.4999 23.4 50.9 24 50.3 24.6L49.5999 25.3C49.2999 25.6 48.8999 25.9 48.5999 26.3L48.3 26.6C47.8 27 47.3999 27.4 47.1999 27.9C46.8999 28.5 46.7999 28.8 46.9999 29.5C47.3999 30 47.8 30.2 48.4 30.3C49.2 30.2 49.5999 29.9 50.1999 29.4L50.4999 29.1C50.7999 28.8 51.1999 28.5 51.4999 28.1C51.6999 27.9 51.9999 27.6 52.1999 27.4C52.7999 26.8 53.3999 26.2 53.9999 25.6C54.5999 25 55.2 24.4 55.9 23.8C57.1 22.6 58.2999 21.4 59.4999 20.2L60.3 19.4V28L60.1999 27.9Z"
                        fill= "currentColor"
                        fill-opacity="0.5"
                      />
                    </svg>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-10 left-10 flex flex-col justify-start gap-[1vw] mobile:static mobile:w-full mobile:h-full mobile:justify-end mobile:pb-[15vw] mobile:px-[5vw] mobile:text-center">
                  <p
                    data-para-anim
                    className="text-[1.65vw] font-medium mobile:text-[7.5vw] tablet:text-[3vw]"
                  >
                    Available Sizes
                  </p>
                  <p
                    data-para-anim
                    className="text-[1.65vw] font-light mobile:text-[5vw] tablet:text-[2.5vw]"
                  >
                    U.S.P. 2 to 6-0
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between items-center w-[28vw] h-[16vw] product-description-card  border relative rounded-[2vw] glassmorphism mobile:w-[75vw] mobile:h-[90vw] mobile:flex-shrink-0 mobile:rounded-[9vw] tablet:w-[43vw] tablet:h-[30vw]">
                <div className="absolute top-10 right-10 w-[4.5vw] h-[4.5vw] flex justify-end items-center mobile:h-[20vw] mobile:w-[20vw]  mobile:right-[35%] tablet:w-[8vw] tablet:h-[8vw]">
                  <div className="w-full h-full relative">
                    <div className={`w-[5vw] h-[5vw] ${className} mobile:h-[30vw] mobile:w-[30vw]`}>
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 90 85"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M57.2 52.2V51.3C57.2 50.7 57.2 50.1 57.2 49.5C57.2 48.7 57.2 47.9 57.2 47.1V42.7C57.2 41.4 56.8 40.4 55.9 39.4C55 38.6 53.9 38.3 52.4 38.2H50.5C50 38.2 49.5 38.2 49 38.2H46.3C45.1 38.2 44.1 38.9 43.1 39.8L41.2 41.5V39.2C40.6 38.4 39.9 37.5 39.3 36.6L35.6 31.3C35.2 30.7 34.9 30.2 34.7 29.4V29L35.3 28.3C36 27.8 36.4 27.2 36.9 26.3L37.1 25.9C37.3 25.6 37.4 25.3 37.5 25C37.9 22.2 37.3 20.2 35.5 17.5L35 16.8C34.6 16.2 34.2 15.7 33.8 15.1L33 14C32.5 13.3 31.9 12.5 31.4 11.8L29 8.50002C28.4 7.70002 27.9 6.90002 27.3 6.10002L26.1 4.40001C25.3 3.20001 24.5 2.20001 23.4 1.40001C21.8 0.50001 19.5 0.600023 17.8 1.60002L16.7 2.3C15.8 2.8 14.8 3.30001 13.9 3.90001C12.2 4.90001 10.4 5.8 8.7 6.8C7.8 7.3 6.8 7.80001 5.9 8.40001L4.4 9.20003C2.3 10.3 0.899999 11.3 0.299998 13.1C-1.51992e-06 15.6 -1.43051e-06 15.7 3.5 20.8L5.6 23.9C6.3 24.9 7 25.9 7.6 26.9L8.2 27.8C8.7 28.6 9.3 29.4 9.8 30.2L10.9 31.9C11.7 33.1 12.3 34 13.3 34.8C15.1 36.2 17.2 36.6 20.2 36.4C20.8 36.3 21.2 36.2 21.8 36.2H22.2L23 37L23.7 38C24 38.4 24.3 38.9 24.6 39.3L25.6 40.8H23.7C22.8 40.8 21.8 40.8 20.9 40.8H17.5C16.1 40.8 15.1 41.1 13.8 41.6C11.4 42.8 10.3 44.7 9.3 47.7L9 48.4C8.8 49.1 8.5 49.7 8.3 50.4L7.9 51.6C7.4 53 6.9 54.5 6.4 56C5.9 57.4 5.4 58.7 5 60.1C4.6 61.3 4.2 62.4 3.8 63.6C3.5 64.3 3.3 65 3.1 65.7C2.9 66.4 2.6 67 2.4 67.7L2.1 68.4C1.4 70.3 1.2 71.6 1.3 73.2C1.6 74.3 2.4 75.2 3.9 76L4.9 76.6L4.6 77.4C4.4 77.9 4.2 78.4 4 79L3.8 79.6C3.4 80.8 3 81.9 3 83.2C3 83.6 3 83.6 3.7 84.2C4.3 84.4 5.1 84.5 5.8 84.3C6.5 83.8 6.6 83.7 7.3 81.6L7.5 80.9C8 79.6 8.4 78.4 8.7 77.3L9 76.2H12.2C12.8 76.2 13.2 76.2 13.7 76L14 75.8C15.1 75.3 15.8 74.2 16.3 73.2L18.6 68.8C19 68.1 19.3 67.4 19.6 66.7L19.9 65.6H20.7C21.1 65.6 21.3 65.6 21.6 65.6L22.1 65.4C23.4 64.8 24.1 63.8 24.7 62.7L25.4 61.3C25.7 60.8 25.9 60.3 26.2 59.8L27.4 57.4C27.6 57 27.8 56.6 27.9 56.2L28.3 55.1H29C30.5 55.1 32.1 55.1 33.6 55.1C34.4 55.1 35.2 55.1 35.9 55.1C36.7 55.1 37.4 55.1 38.2 55.1H39.3C39.7 55.1 40 55.1 40.4 55.1H41.5C42.4 55.1 42.6 55.3 43.1 55.9C43.1667 56.1667 43.2667 56.3667 43.4 56.5L43.7 56.7C44.5 57.5 45.5 57.8 46.8 57.8H48.6C49.1 57.8 49.6 57.8 50.1 57.8H51.8C53.4 57.8 54.6 57.6 55.8 56.6C56.9 55.4 57 54 57 52.2H57.2ZM34.6 36.6C35.3 37.6 35.9 38.6 36.5 39.6L37.3 41.1H31.8C31.8 41.1 31.7 41.1 31.6 41.1C31.3 41.1 31 41.1 30.7 41.1H30.3L30 40.7C29.2 39.8 29.2 39.7 28.5 38.7L26.9 36.5C26.5 35.9 26 35.3 25.9 34.4V33.7C25.8 33.7 28.8 32.1 28.8 32.1C29.4 31.8 29.7 31.6 30.5 31.6H30.9L31.7 32.6L34.5 36.6H34.6ZM24 30.8L22.5 31.6C21.2 32.4 19.7 33.1 18 33.1H17.7C15.9 32.6 15.1 31.7 14.2 30.3C14 29.9 13.8 29.6 13.5 29.3C13 28.5 12.5 27.8 12 27L10.1 24.1C9.5 23.3 9 22.4 8.4 21.6C7.6 20.4 6.7 19.1 5.9 17.9L4.9 16.3C4.5 15.8 4.2 15.2 4.1 14.4V13.7C4 13.7 4.6 13.3 4.6 13.3C6.8 11.9 9.2 10.6 11.2 9.50002C12 9.10002 12.8 8.60003 13.5 8.20003C14.9 7.40003 16.4 6.6 17.9 5.8L19.3 5.00002C19.9 4.70002 20.2 4.50002 21 4.50002H21.4L22 5.20003L22.6 6.00002C22.8 6.30002 23.1 6.70002 23.3 7.00002L23.7 7.50002C24.3 8.40002 24.9 9.30002 25.6 10.1L28.8 14.6C29.3 15.4 29.9 16.1 30.4 16.9L31.5 18.4C31.6 18.6 31.8 18.8 32 19C32.8 20 33.6 21.2 33.9 22.5C33.9 22.6 33.9 23.2 33.9 23.2C33.9 23.7 33.9 23.7 33.9 24.2V24.4C33.4 25.5 32.6 26.2 31.7 26.7L31.1 27.1C29.7 27.9 28.2 28.7 26.9 29.4H26.8C26 29.9 25.1 30.4 24.3 30.8H24ZM42.2 51.8H28.9C28.1 52 27.5 52 26.9 52.2L26.6 52.4C25.5 52.9 25 53.9 24.4 55C24.2 55.4 24 55.7 23.9 56.1C23.6 56.7 23.3 57.3 23 57.8C22.7 58.4 22.4 59 22.1 59.6L21.8 60.2C21.5 60.9 21.1 61.6 20.5 62.3L20.3 62.5H20.1C19.4 62.8 18.7 62.8 18.2 62.8H18C17.6 63 17.3 63.2 17.1 63.6L16.1 65.6C15.8 66.2 15.5 66.7 15.2 67.3C14.8 68 14.5 68.7 14.1 69.4L12.1 73.3H5.1V72.3C5.1 71.8 5.1 71.7 5.2 71.3L8.5 61.8C9.2 59.8 9.9 57.8 10.6 55.8C11 54.7 11.4 53.6 11.8 52.5L12.8 49.6C12.9 49.2 13.1 48.8 13.2 48.3V47.9C13.6 47.1 13.9 46.5 14.3 45.9L14.5 45.7C15.9 44.4 17.5 44.4 19 44.4H20C20.6 44.4 21.3 44.4 21.9 44.4H23.9C25.2 44.4 26.4 44.4 27.7 44.4H32C35.1 44.4 38.2 44.4 41.3 44.4H42.3V51.7L42.2 51.8ZM53.5 54.5H45.9V41.8H53.5V54.5Z"
                        fill= "currentColor"
                        fill-opacity="0.5"
                      />
                      <path
                        d="M87.2 56.2C88.1 56.6 88.6 57.1 89 57.9C89.1 58.8 89.1 59.6 88.7 60.5C87.9 61.3 87.4 61.6 86.2 61.7C85 61.7 84.5 61.3 83.7 60.5C83.3 59.6 83.3 58.8 83.4 57.9C84.2 56.3 85.5 56 87.3 56.2H87.2Z"
                        fill= "currentColor"
                        fill-opacity="0.5"
                      />
                      <path
                        d="M75.9 50.8C76.8 51.2 77.3 51.7 77.7 52.5C77.8 53.4 77.8 54.2 77.4 55.1C76.6 55.9 76.1 56.2 74.9 56.3C73.7 56.3 73.2 55.9 72.4 55.1C72 54.2 72 53.4 72.1 52.5C72.9 50.9 74.2 50.6 76 50.8H75.9Z"
                        fill= "currentColor"
                        fill-opacity="0.5"
                      />
                      <path
                        d="M87.2 45.5C88.1 45.9 88.6 46.4 89 47.2C89.1 48.1 89.1 48.9 88.7 49.8C87.9 50.6 87.4 50.9 86.2 51C85 51 84.5 50.6 83.7 49.8C83.3 48.9 83.3 48.1 83.4 47.2C84.2 45.6 85.5 45.3 87.3 45.5H87.2Z"
                        fill= "currentColor"
                        fill-opacity="0.5"
                      />
                      <path
                        d="M64.7 45.5C65.6 45.9 66.1 46.4 66.5 47.2C66.6 48.1 66.6 48.9 66.2 49.8C65.4 50.6 64.9 50.9 63.7 51C62.5 51 62 50.6 61.2 49.8C60.8 48.9 60.8 48.1 60.9 47.2C61.7 45.6 63 45.3 64.8 45.5H64.7Z"
                        fill= "currentColor"
                        fill-opacity="0.5"
                      />
                      <path
                        d="M75.9 40.1C76.8 40.5 77.3 41 77.7 41.8C77.8 42.7 77.8 43.5 77.4 44.4C76.6 45.2 76.1 45.5 74.9 45.6C73.7 45.6 73.2 45.2 72.4 44.4C72 43.5 72 42.7 72.1 41.8C72.9 40.2 74.2 39.9 76 40.1H75.9Z"
                        fill= "currentColor"
                        fill-opacity="0.5"
                      />
                      <path
                        d="M87.2 34.8C88.1 35.2 88.6 35.7 89 36.5C89.1 37.4 89.1 38.2 88.7 39.1C87.9 39.9 87.4 40.2 86.2 40.3C85 40.3 84.5 39.9 83.7 39.1C83.3 38.2 83.3 37.4 83.4 36.5C84.2 34.9 85.5 34.6 87.3 34.8H87.2Z"
                        fill= "currentColor"
                        fill-opacity="0.5"
                      />
                    </svg>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-10 left-10 flex flex-col justify-start gap-[1vw] mobile:static mobile:w-full mobile:h-full mobile:justify-end mobile:pb-[15vw] mobile:px-[5vw] mobile:text-center">
                  <p
                    data-para-anim
                    className="text-[1.65vw] font-medium mobile:text-[7.5vw] tablet:text-[3vw]"
                  >
                    Coating
                  </p>
                  <p
                    data-para-anim
                    className="text-[1.65vw] font-light mobile:text-[5vw] tablet:text-[2.5vw]"
                  >
                    Copolymer of Poly (glycolide-co-lactide) and Calcium
                    Stearate
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between items-center w-[28vw] h-[16vw] product-description-card  border relative rounded-[2vw] glassmorphism mobile:w-[75vw] mobile:h-[90vw] mobile:flex-shrink-0 mobile:rounded-[9vw] tablet:w-[43vw] tablet:h-[30vw]">
                <div className="absolute top-10 right-10 w-[4.5vw] h-[4.5vw] flex justify-end items-center mobile:h-[20vw] mobile:w-[20vw]  mobile:right-[35%] tablet:w-[8vw] tablet:h-[8vw]">
                  <div className="w-full h-full relative">
                    <div className={`w-[5vw] h-[5vw] ${className} mobile:h-[30vw] mobile:w-[30vw]`}>
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 92 90"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M91.5 2.29999C91.5 1.29999 90.7 0.5 89.7 0.5H81.8C80.8 0.5 80 1.29999 80 2.29999C80 3.29999 80.8 4.10001 81.8 4.10001H85.3L73.4 15.7C73.1 16 72.9 16.5 72.9 17C72.9 17.5 73.1 17.9 73.4 18.3C74.1 19 75.3 19 76 18.3L87.9 6.70001V10.1C87.9 11.1 88.7 11.9 89.7 11.9C90.7 11.9 91.5 11.1 91.5 10.1V2.39999V2.29999Z"
                        fill= "currentColor"
                        fill-opacity="0.5"
                      />
                      <path
                        d="M18.4 71.7L18.6 71.5L18.2 71.2C17.5 70.8 16.6 70.9 16 71.5L4.09998 83.1V79.7C4.09998 78.7 3.29999 77.9 2.29999 77.9C1.29999 77.9 0.5 78.7 0.5 79.7V87.4C0.5 88.4 1.29999 89.2 2.29999 89.2H10.2C11.2 89.2 12 88.4 12 87.4C12 86.4 11.2 85.6 10.2 85.6H6.70001L18.6 74C18.9 73.7 19.1 73.2 19.1 72.7C19.1 72.4 19.1 72.1 18.9 71.8L18.5 71.5"
                        fill= "currentColor"
                        fill-opacity="0.5"
                      />
                      <path
                        d="M57 53.1L56.3 52.4C55.8 52.1 55.1 52.1 54.6 52.4L53.8 53C44 62.6 36.3 73.4 33.4 77.6L33.1 78.1L23.8 69L27.6 65.3C27.9 65 28.1 64.5 28.1 64C28.1 63.5 27.9 63.1 27.6 62.7C26.9 62 25.7 62 25 62.7L21.2 66.4L11.9 57.3L12.4 57C16.8 54.2 28 46.5 37.9 36.8C44.7 30.2 50.5 23 54.1 18.2C54.4 17.8 54.5 17.3 54.4 16.9C54.4 16.6 54.2 16.3 54 16.1L53.2 15.5C52.5 15.2 51.6 15.5 51.1 16.1C47.5 20.8 41.9 27.8 35.2 34.3C28.7 40.7 21.6 46.1 16.8 49.5C14.1 51.5 11.8 53 10.4 53.9C9.60002 54.4 9 54.8 8.5 55.1L7.79999 55.6C7.39999 55.9 7.1 56.3 7 56.9C7 57.4 7.1 58 7.5 58.4L31.6 81.8L32 82.1L32.3 81.8L32.1 82.1L32.5 82.4C32.8 82.6 33.2 82.6 33.6 82.6C34.1 82.6 34.6 82.3 34.9 81.8L35.3 81.1C35.6 80.7 36 80.1 36.5 79.3C37.5 77.9 39 75.7 41 73C44.5 68.4 50.1 61.5 56.6 55.1C56.9 54.8 57.1 54.3 57.1 53.8C57.1 53.3 57.1 53.2 56.9 52.9L57 53.1Z"
                        fill= "currentColor"
                        fill-opacity="0.5"
                      />
                      <path
                        d="M84.4 31.2L60 7.40001C59.7 7.10001 59.4 7.00001 59 6.90001C58.4 6.80001 58 7.00001 58 7.00001C57.7 7.10001 57.4 7.40003 57.2 7.70003C57 8.10003 56 9.60003 54.5 11.7C54.2 12.1 54.1 12.6 54.2 13C54.2 13.5 54.6 13.9 55 14.2C55.8 14.8 57 14.5 57.5 13.7C58 13 58.4 12.4 58.7 11.9L59 11.4L68.3 20.5L28.8 59C28.5 59.3 28.3 59.8 28.3 60.3C28.3 60.8 28.5 61.2 28.8 61.6C29.5 62.3 30.7 62.3 31.4 61.6L71 23.1L80.3 32.2L79.8 32.5C75.6 35.3 67.3 41 59 48.3L58.3 49C58.1 49.3 58 49.5 58 49.9C58 50.4 58.2 50.8 58.5 51.2C59.2 51.9 60.3 52 61.1 51.3C67 46.1 72.9 41.7 76.8 38.9C79 37.3 80.9 36.1 82.1 35.3C82.7 34.9 83.2 34.6 83.6 34.3L84.1 34C84.6 33.7 84.9 33.2 85 32.7C85 32.2 84.9 31.6 84.5 31.2H84.4Z"
                        fill= "currentColor"
                        fill-opacity="0.5"
                      />
                    </svg>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-10 left-10 flex flex-col justify-start gap-[1vw] mobile:static mobile:w-full mobile:h-full mobile:justify-end mobile:pb-[15vw] mobile:px-[5vw] mobile:text-center">
                  <p
                    data-para-anim
                    className="text-[1.65vw] font-medium mobile:text-[7.5vw] tablet:text-[3vw]"
                  >
                    Tensile Strength
                  </p>
                  <p
                    data-para-anim
                    className="text-[1.65vw] font-light mobile:text-[5vw] tablet:text-[2.5vw]"
                  >
                    ~75% | 14 Days ~55% | 21 Days
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-between items-center w-[28vw] h-[16vw] product-description-card  border relative rounded-[2vw] glassmorphism mobile:w-[75vw] mobile:h-[90vw] mobile:flex-shrink-0 mobile:rounded-[9vw] tablet:w-[43vw] tablet:h-[30vw]">
                <div className="absolute top-10 right-10 w-[4.5vw] h-[4.5vw] flex justify-end items-center mobile:h-[20vw] mobile:w-[20vw]  mobile:right-[35%] tablet:w-[8vw] tablet:h-[8vw]">
                  <div className="w-full h-full relative">
                    <div className={`w-[5vw] h-[5vw] ${className} mobile:h-[30vw] mobile:w-[30vw]`}>
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 79 79"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M70.8001 15.2L70.4001 14.8C68.8001 12.8 66.9 10.9 64.6 8.89999L64.3001 8.70001C59.3001 4.60001 53.3 1.90001 47.1 0.700012H46.7C44.5 0.200012 42.1001 0 39.8001 0C37.5001 0 35.5001 0.200006 33.5001 0.600006H33.1C26.6 1.90001 20.8 4.50001 16.1 8.20001L15.7 8.60001C13.7 10.2 11.8001 12.1 9.8001 14.4L9.60003 14.7C5.50003 19.7 2.80003 25.7 1.60003 31.9V32.3C0.700028 36.6 0.700077 41.4 1.40008 45.5V45.9C2.70008 52.4 5.30005 58.2 9.00005 62.9L9.40008 63.3C11.0001 65.3 12.8 67.2 15.2 69.2L15.5001 69.4C20.5001 73.5 26.5 76.2 32.7 77.4H33.1C37.4 78.3 42.2001 78.3 46.3001 77.6H46.7C53.2 76.3 59 73.7 63.7 70L64.1 69.6C66.1 68 68.0001 66.1 70.0001 63.8L70.2 63.5C74.3 58.5 77 52.6 78.2 46.3V45.9C79.1 41.6 79.1001 36.8 78.4001 32.7V32.3C77.1001 25.8 74.5001 20 70.8001 15.3V15.2ZM74.5001 42.4V42.9C73.6001 49.3 71.3001 55.1 67.4001 60.1L67.2 60.4C66.3 61.5 65.5 62.4 64.7 63.2L64.3001 63.6C63.4001 64.5 62.3 65.5 61.1 66.4L60.6 66.7C58.8 68.1 57.1001 69.1 55.5001 69.9L55.2 70.1C50.3 72.5 45.1001 73.7 40.0001 73.7C34.9001 73.7 37.8 73.7 36.6 73.5H36.1C29.7 72.6 23.9001 70.3 18.9001 66.4L18.6 66.2C17.5 65.3 16.6001 64.5 15.8001 63.7L15.4001 63.3C14.5001 62.4 13.5 61.3 12.6 60.1L12.3001 59.6C10.9001 57.8 9.90003 56.1 9.10003 54.5L8.90008 54.2C6.00008 48.2 4.80005 41.8 5.50005 35.6V35.1C6.40005 28.7 8.70003 22.9 12.6 17.9L12.8001 17.6C13.7001 16.5 14.5001 15.6 15.3001 14.8L15.7 14.4C16.6 13.5 17.7001 12.5 18.9001 11.6L19.4001 11.3C21.2001 9.89999 22.9001 8.90001 24.5001 8.10001L24.8001 7.89999C30.8001 4.99999 37.2001 3.8 43.4001 4.5H43.9001C50.3001 5.4 56.1 7.70001 61.1 11.6L61.4001 11.8C62.5001 12.7 63.4 13.5 64.2 14.3L64.6 14.7C65.5 15.6 66.5001 16.7 67.4001 17.9L67.7 18.4C69.1 20.2 70.1001 21.9 70.9001 23.5L71.1 23.8C74 29.8 75.2001 36.2 74.5001 42.4Z"
                        fill= "currentColor"
                        fill-opacity="0.5"
                      />
                      <path
                        d="M37.6 24.2C37.6 24.8 37.6 25.4 37.6 26C37.6 27 37.6 28 37.6 29C37.6 30.2 37.6 31.3 37.6 32.5C37.6 33.8 37.6 35 37.6 36.3V40.9C37.6 41.3 37.6 41.3 37.6 41.6C37.9 42.3 38.3 42.7 39.1 43.3L40.2 44.1C40.9 44.6 41.6 45.1 42.3 45.7C43.6 46.7 44.8 47.6 46.1 48.5C46.8 49 47.5 49.5 48.2 50L50.1 51.5C51 52.2 52 53 53 53.2C54 53.2 54.6 53 55.3 52.4C55.7 51.6 55.9 51 55.9 50.4C55.8 49.6 55.3 49.1 54.4 48.4C53.5 47.7 52.5 47 51.6 46.3C50.3 45.3 49 44.3 47.7 43.4L47 42.9C46.6 42.6 46.3 42.3 45.9 42.1C45.2 41.7 44.2 41.1 43.3 40.2H43.2C43.2 40.1 43.2 39.9 43.2 39.9C42.4 37.8 42.3 37.7 42.5 35.3C42.5 34.9 42.5 34.5 42.5 34.1C42.5 33 42.5 31.9 42.5 30.8C42.5 29.6 42.5 28.3 42.5 27.1V26.8C42.5 25.7 42.5 24.6 42.5 23.5V20.8C42.5 20.6 42.5 20.4 42.5 20.2C42.3 19.6 42 19.2 41.5 18.9C40.5 18.4 39.6 18.4 38.4 19.1C37.8 19.8 37.6 20.5 37.6 21.6V22.1C37.6 22.9 37.6 23.5 37.6 24.2Z"
                        fill= "currentColor"
                        fill-opacity="0.5"
                      />
                    </svg>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-10 left-10 flex flex-col justify-start gap-[1vw] mobile:static mobile:w-full mobile:h-full mobile:justify-end mobile:pb-[15vw] mobile:px-[5vw] mobile:text-center">
                  <p
                    data-para-anim
                    className="text-[1.65vw] font-medium mobile:text-[7.5vw] tablet:text-[3vw]"
                  >
                    Absorption Profile
                  </p>
                  <p
                    data-para-anim
                    className="text-[1.65vw]  font-light mobile:text-[5vw] tablet:text-[2.5vw]"
                  >
                    Essentially complete upto 80 days
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDescription;
