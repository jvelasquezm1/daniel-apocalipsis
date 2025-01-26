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
import { useTranslations } from "next-intl";

const Daniel = () => {
  const t = useTranslations();
  return (
    <DefaultLayout>
      <CarouselCard
        title={t("daniel.title")}
        description={t("daniel.description")}
        slidesData={[
          {
            img: C1Daniel,
            caption: t("daniel.chapter1.title"),
            link: "daniel/1",
          },
          {
            img: C2Daniel,
            caption: t("daniel.chapter2.title"),
            link: "daniel/2",
          },
          {
            img: C3Daniel,
            caption: t("daniel.chapter3.title"),
            link: "daniel/3",
          },
          {
            img: C4Daniel,
            caption: t("daniel.chapter4.title"),
            link: "daniel/4",
          },
          {
            img: C5Daniel,
            caption: t("daniel.chapter5.title"),
            link: "daniel/5",
          },
          {
            img: C6Daniel,
            caption: t("daniel.chapter6.title"),
            link: "daniel/6",
          },
          {
            img: C7Daniel,
            caption: t("daniel.chapter7.title"),
            link: "daniel/7",
          },
          {
            img: C8Daniel,
            caption: t("daniel.chapter8.title"),
            link: "daniel/8",
          },
          {
            img: C9Daniel,
            caption: t("daniel.chapter9.title"),
            link: "daniel/9",
          },
          {
            img: C10Daniel,
            caption: t("daniel.chapter10.title"),
            link: "daniel/10",
          },
          {
            img: C11Daniel,
            caption: t("daniel.chapter11.title"),
            link: "daniel/11",
          },
          {
            img: C12Daniel,
            caption: t("daniel.chapter12.title"),
            link: "daniel/12",
          },
        ]}
      />
    </DefaultLayout>
  );
};

export default memo(Daniel);
