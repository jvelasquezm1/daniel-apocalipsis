import React, { memo } from "react";

import Link from "next/link";

interface CardProps {
  link: string;
  description: string;
  title: string;
  buttonTitle: string;
}

const BookCard: React.FC<CardProps> = ({
  link,
  title,
  description,
  buttonTitle,
}) => {
  return (
    <div className="container">
      <div className="m-auto h-96 overflow-auto p-4">
        <p className="p-8 text-5xl font-bold">{title}</p>
        <p className="block border-t p-8 text-justify text-base">
          {description}
        </p>
      </div>
      <Link href={link} className="m-auto block w-32 text-center font-bold ">
        {buttonTitle}
      </Link>
    </div>
  );
};

export default memo(BookCard);
