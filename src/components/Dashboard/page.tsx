"use client";
import React from "react";
import BookCard from "../BookCard";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-10 lg:flex-row">
        <BookCard
          link={"/daniel/1"}
          description={
            "Daniel en la Biblia revela profecías intrigantes que abordan eventos futuros y establecen lecciones intemporales. Sus visiones proféticas ofrecen perspectivas sobre el presente, inspirando confianza y reflexión en la búsqueda de un significado más profundo en nuestra vida actual."
          }
          title={"Daniel"}
        />
        <BookCard
          link={"/revelation/1"}
          description={
            "El Apocalipsis, último libro de la Biblia, desentraña visiones apocalípticas. Revela simbolismos, anticipa eventos finales y promete esperanza. Su mensaje trasciende épocas, ofreciendo guía y consuelo para los desafíos contemporáneos"
          }
          title={"Apocalipsis"}
        />
      </div>

      <div className="mx-auto mt-6 flex-1 overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
        <div className="p-6"></div>
      </div>
    </>
  );
};

export default Dashboard;
