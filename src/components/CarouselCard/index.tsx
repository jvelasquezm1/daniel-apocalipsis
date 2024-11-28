import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { memo, useState } from "react";

interface CarouselCardProps {
  title: string;
  description: string;
  slidesData: { img: StaticImageData; caption: string; link: string }[];
}

interface CarouselButtonProps {
  onClick: () => void;
  content: string;
}

const CarouselButton: React.FC<CarouselButtonProps> = ({
  onClick,
  content,
}) => (
  <button
    onClick={onClick}
    className="hover:bg-gray-300 rounded-full p-3 text-2xl shadow-lg focus:outline-none"
  >
    {content}
  </button>
);

const CarouselCard: React.FC<CarouselCardProps> = ({
  title,
  description,
  slidesData,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slidesData.length) % slidesData.length,
    );
  };

  return (
    <div className="flex flex-col-reverse p-4 lg:flex-row">
      <div className="container mt-32 w-full lg:w-[50%] lg:space-y-4">
        <span className="text-5xl font-bold">{title}</span>
        <span className="block w-[90vw] border-t pt-4 text-justify lg:w-full">
          {description}
        </span>
      </div>
      <div className="relative flex w-[100vw] flex-col lg:w-[50%] lg:items-center lg:justify-center">
        <div className="h-[85%] w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                currentSlide *
                (window.matchMedia("(min-width: 1024px)").matches ? 100 : 140)
              }%)`,
            }}
          >
            {slidesData.map((slide, index) => (
              <div
                key={index}
                className="flex min-w-[140vw] flex-col lg:min-w-full lg:items-center lg:justify-center"
              >
                <div className="mt-10 w-[70%] rounded-lg p-16">
                  <Image
                    src={slide.img}
                    style={{ objectFit: "cover" }}
                    width="350"
                    height="350"
                    alt={slide.caption}
                    className="mx-auto rounded-3xl"
                  />
                  <p className="mt-4 text-xl">{slide.caption}</p>
                  <Link href={slide.link}>Leer</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <CarouselButton onClick={handlePrevSlide} content="⬅️" />
          <CarouselButton onClick={handleNextSlide} content="➡️" />
        </div>
      </div>
    </div>
  );
};

export default memo(CarouselCard);
