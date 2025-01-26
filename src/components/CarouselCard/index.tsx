import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { memo, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface CarouselCardProps {
  title: string;
  description: string;
  slidesData: { img: StaticImageData; caption: string; link: string }[];
}

interface CarouselButtonProps {
  onClick: () => void;
  content: React.ReactNode;
}

const CarouselButton: React.FC<CarouselButtonProps> = ({
  onClick,
  content,
}) => (
  <button
    onClick={onClick}
    className="hover:text-gray-600 p-3 text-2xl transition-colors focus:outline-none"
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
    <div className="flex max-w-screen-xl flex-col-reverse p-4 lg:flex-row">
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
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {slidesData.map((slide, index) => (
              <div
                key={index}
                className="flex min-w-full flex-col items-center justify-center"
              >
                <div className="mt-10 w-full max-w-[350px] px-4">
                  <Link href={slide.link}>
                    <Image
                      src={slide.img}
                      style={{ objectFit: "cover" }}
                      width="350"
                      height="350"
                      alt={slide.caption}
                      className="mx-auto cursor-pointer rounded-3xl transition-transform duration-300 hover:scale-105"
                    />
                  </Link>
                  <p className="mt-4 text-center text-xl">{slide.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <CarouselButton
            onClick={handlePrevSlide}
            content={<IoIosArrowBack size={24} />}
          />
          <CarouselButton
            onClick={handleNextSlide}
            content={<IoIosArrowForward size={24} />}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(CarouselCard);
