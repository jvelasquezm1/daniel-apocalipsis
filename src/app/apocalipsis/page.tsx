"use client";
import CarouselCard from "@/components/CarouselCard";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { memo } from "react";
import {
  C1Revelation,
  C2Revelation,
  C3Revelation,
  C4Revelation,
  C5Revelation,
  C6Revelation,
  C7Revelation,
} from "../../../public/assets";

const Revelation = () => {
  return (
    <DefaultLayout>
      <CarouselCard
        title={"Libro de Apocalipsis"}
        description={
          "Apocalipsis, el profeta sabio, narra sueños y visiones divinas, desentrañando el futuro con claridad. Desde la férrea fe en la adversidad hasta la victoria final del bien sobre el mal, Revelation es un faro de esperanza y sabiduría en el tejido de la historia bíblica y la humanidad."
        }
        slidesData={[
          {
            img: C1Revelation,
            caption: "Chapter 1: Revelation y sus amigos",
            link: "apocalipsis/1",
          },
          {
            img: C2Revelation,
            caption: "Chapter 2: Sueño de Nabucodonosor",
            link: "apocalipsis/2",
          },
          {
            img: C3Revelation,
            caption: "Chapter 3: Horno de fuego",
            link: "apocalipsis/3",
          },
          {
            img: C4Revelation,
            caption: "Chapter 4: El pueblo de Dios",
            link: "apocalipsis/4",
          },
          {
            img: C5Revelation,
            caption: "Chapter 5: La mano en la pared",
            link: "apocalipsis/5",
          },
          {
            img: C6Revelation,
            caption: "Chapter 6: El sacrificio de Jesús",
            link: "apocalipsis/6",
          },
          {
            img: C7Revelation,
            caption: "Chapter 7: El reino de los profetas",
            link: "apocalipsis/7",
          },
        ]}
      />
    </DefaultLayout>
  );
};

export default memo(Revelation);
