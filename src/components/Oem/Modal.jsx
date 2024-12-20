import React from 'react';
import Image from 'next/image';

const modalContent = [
  {
    id: 1,
    title: 'Knotless Tissue Control Device',
    description: 'This is a detailed description of the Knotless Tissue Control Device...',
    features: [
      'Closer Barb Spacing',
      'Superior Holding Strength',
      'Unidirectional and Circumferential Barbs',
      'Ultrasonic Welded Loop',
    ],
  },
  {
    id: 2,
    title: 'Another Card Title',
    description: 'This is the content for another card...',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    id: 3,
    title: 'Third Content Another Card Title',
    description: 'This is the content for another card...',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    id: 4,
    title: 'Fourth Content Another Card Title',
    description: 'This is the content for another card...',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    id: 5,
    title: 'Fifth Content Another Card Title',
    description: 'This is the content for another card...',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
];

const Modal = ({ isOpen, onClose, cardId }) => {
  if (!isOpen) return null;

  // Find the content by cardId
  const content = modalContent.find((item) => item.id === cardId);

  if (!content) return null; // If no content matches, return nothing

  return (
    <div className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center z-[999] bg-opacity-50 bg-black/80">
      {/* Close Button */}
      <div
        onClick={onClose}
        className="cursor-pointer absolute top-[2vw] right-[2vw] flex items-center justify-center text-white border-[2px] p-[1vw] rounded-full border-white h-[3.5vw] w-[3.5vw] mobile:w-[7.5vw] mobile:h-[7.5vw] mobile:p-[1.5vw] mobile:top-[6vw] mobile:right-[5vw] tablet:h-[6vw] tablet:w-[6vw] tablet:p-[1.5vw]"
      >
        <div className="h-full w-full relative">
          <Image
            src="/assets/icons/cross-icon.svg"
            fill
            className="object-contain"
            alt="cross-icon"
          />
        </div>
      </div>

      {/* Modal Content */}
      <div className="bg-[#efefef] border border-white rounded-[2vw] p-[3vw] pt-[4vw] w-[80vw] max-h-[95vh] mobile:max-h-[95vh] mobile:py-[7vw] mobile:w-[95vw] mobile:rounded-[7vw] tablet:w-[90vw] tablet:max-w-[95vw] tablet:rounded-[3.5vw] tablet:p-[4vw]">
        <h2 className="text-2xl font-bold mb-4">{content.title}</h2>
        <p className="text-base mb-4">{content.description}</p>
        <ul className="list-disc pl-5">
          {content.features.map((feature, index) => (
            <li key={index} className="mb-2">{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
