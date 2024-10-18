"use client";
import CarouselCard from "@/components/CarouselCard";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { memo } from "react";
import { Beast, Friends, Heaven } from "../../../public/assets";

const Daniel = () => {
  return (
    <DefaultLayout>
      <CarouselCard
        title={"Libro de Daniel"}
        description={
          "Daniel, el profeta sabio, narra sueños y visiones divinas, desentrañando el futuro con claridad. Desde la férrea fe en la adversidad hasta la victoria final del bien sobre el mal, Daniel es un faro de esperanza y sabiduría en el tejido de la historia bíblica y la humanidad."
        }
        slidesData={[
          {
            img: Beast,
            caption: "Chapter 1: Daniel y sus amigos",
            link: "daniel/1",
          },
          {
            img: Friends,
            caption: "Chapter 2: Sueño de Nabucodonosor",
            link: "daniel/2",
          },
          {
            img: Heaven,
            caption: "Chapter 3: Horno de fuego",
            link: "daniel/3",
          },
        ]}
      />
    </DefaultLayout>
  );
};

export default memo(Daniel);
