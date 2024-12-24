import React, { useState } from "react";
import Image from "next/image";

const CustomSlider = () => {
  const slides = [
    {
      title: "ADVA GLIDE",
      image: "/assets/ic/advaglide.png",
      description:
        "AMS has advanced the science of flow restoration to provide minimally invasive products.",
    },
    {
      title: "ADVA PRO",
      image: "/assets/ic/advapro.png",
    },
    {
      title: "Coronary Accessories",
      image: "/assets/ic/accessories.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full h-full relative ">
      <div className="container mx-auto flex items-center justify-center flex-col">
       
      </div>
    </div>
  );
};

export default CustomSlider;
