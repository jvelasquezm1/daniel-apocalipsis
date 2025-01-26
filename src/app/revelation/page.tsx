"use client";
import CarouselCard from "@/components/CarouselCard";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { memo } from "react";
import { useTranslations } from "next-intl";
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
  const t = useTranslations();
  return (
    <DefaultLayout>
      <CarouselCard
        title={t("revelation.title")}
        description={t("revelation.description")}
        slidesData={[
          {
            img: C1Revelation,
            caption: t("revelation.chapter1.title"),
            link: "revelation/1",
          },
          {
            img: C2Revelation,
            caption: t("revelation.chapter2.title"),
            link: "revelation/2",
          },
          {
            img: C3Revelation,
            caption: t("revelation.chapter3.title"),
            link: "revelation/3",
          },
          {
            img: C4Revelation,
            caption: t("revelation.chapter4.title"),
            link: "revelation/4",
          },
          {
            img: C5Revelation,
            caption: t("revelation.chapter5.title"),
            link: "revelation/5",
          },
          {
            img: C6Revelation,
            caption: t("revelation.chapter6.title"),
            link: "revelation/6",
          },
          {
            img: C7Revelation,
            caption: t("revelation.chapter7.title"),
            link: "revelation/7",
          },
        ]}
      />
    </DefaultLayout>
  );
};

export default memo(Revelation);
