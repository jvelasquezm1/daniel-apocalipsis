import React, { memo } from "react";

interface CardProps {
  link: string;
  description: string;
  title: string;
}

const BookCard: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="mx-auto flex-1 overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="h-96 p-6">
        <h2 className="text-gray-900 mb-4 text-2xl font-extrabold">{title}</h2>
        <p className="text-gray-700 mb-6 text-justify">{description}</p>
      </div>
    </div>
  );
};

export default memo(BookCard);
