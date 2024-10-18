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
    className="hover:bg-gray-300 rounded-full bg-white p-3 shadow-lg focus:outline-none"
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
    <div className="flex p-4">
      <div className="container mt-32 w-[50%] space-y-4">
        <span className="text-5xl font-bold">{title}</span>
        <span className="block border-t pt-4 text-justify">{description}</span>
      </div>
      <div className="relative flex w-[50%] flex-col items-center justify-center">
        <div className="h-auto w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slidesData.map((slide, index) => (
              <div
                key={index}
                className="flex min-w-full flex-col items-center justify-center"
              >
                <div className="mt-10 w-[70%] rounded-lg border p-16">
                  <Image
                    src={slide.img}
                    style={{ objectFit: "cover" }}
                    width="350"
                    height="350"
                    alt={slide.caption}
                    className="mx-auto rounded-3xl"
                  />
                  <p className="mt-4 text-center text-xl">{slide.caption}</p>
                  <Link href={slide.link}>Leer</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-center space-x-4">
          <CarouselButton onClick={handlePrevSlide} content="⬅️" />
          <CarouselButton onClick={handleNextSlide} content="➡️" />
        </div>
      </div>
    </div>
  );
};

export default memo(CarouselCard);
