"use client";
import React from "react";
import BookCard from "../BookCard";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="flex h-[80vh] flex-col content-center items-center gap-6 lg:flex-row">
        <BookCard
          link={"/daniel/1"}
          description={
            "Daniel en la Biblia revela profecías intrigantes que abordan eventos futuros y establecen lecciones intemporales. Sus visiones proféticas ofrecen perspectivas sobre el presente, inspirando confianza y reflexión en la búsqueda de un significado más profundo en nuestra vida actual."
          }
          title={"Daniel"}
        />
        <BookCard
          link={"/apocalipsis/1"}
          description={
            "El Apocalipsis, último libro de la Biblia, desentraña visiones apocalípticas. Revela simbolismos, anticipa eventos finales y promete esperanza. Su mensaje trasciende épocas, ofreciendo guía y consuelo para los desafíos contemporáneos"
          }
          title={"Apocalipsis"}
        />
      </div>
    </>
  );
};

export default Dashboard;
