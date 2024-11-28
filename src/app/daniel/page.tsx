"use client";
import CarouselCard from "@/components/CarouselCard";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { memo } from "react";
import {
  C1Daniel,
  C2Daniel,
  C3Daniel,
  C4Daniel,
  C5Daniel,
  C6Daniel,
  C7Daniel,
  C8Daniel,
  C9Daniel,
  C10Daniel,
  C11Daniel,
  C12Daniel,
} from "../../../public/assets";

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
            img: C1Daniel,
            caption: "Chapter 1: Daniel y sus amigos",
            link: "daniel/1",
          },
          {
            img: C2Daniel,
            caption: "Chapter 2: Sueño de Nabucodonosor",
            link: "daniel/2",
          },
          {
            img: C3Daniel,
            caption: "Chapter 3: Horno de fuego",
            link: "daniel/3",
          },
          {
            img: C4Daniel,
            caption: "Chapter 4: El pueblo de Dios",
            link: "daniel/4",
          },
          {
            img: C5Daniel,
            caption: "Chapter 5: La mano en la pared",
            link: "daniel/5",
          },
          {
            img: C6Daniel,
            caption: "Chapter 6: El sacrificio de Jesús",
            link: "daniel/6",
          },
          {
            img: C7Daniel,
            caption: "Chapter 7: El reino de los profetas",
            link: "daniel/7",
          },
          {
            img: C8Daniel,
            caption: "Chapter 8: El regreso de Jesús",
            link: "daniel/8",
          },
          {
            img: C9Daniel,
            caption: "Chapter 9: El sacrificio de Jesús para salvar al mundo",
            link: "daniel/9",
          },
          {
            img: C10Daniel,
            caption: "Chapter 10: La obra de Dios",
            link: "daniel/10",
          },
          {
            img: C11Daniel,
            caption: "Chapter 11: El final",
            link: "daniel/11",
          },
          {
            img: C12Daniel,
            caption: "Chapter 12: La resurrección",
            link: "daniel/12",
          },
        ]}
      />
    </DefaultLayout>
  );
};

export default memo(Daniel);
