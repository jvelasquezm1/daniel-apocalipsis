"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { memo } from "react";
import { useTranslations } from "next-intl";

const Chapter6 = () => {
  const t = useTranslations();

  return (
    <DefaultLayout>
      <div className="min-h-[100vh] p-4">
        <h2 className="mb-3 border-b pb-4 text-center text-2xl font-extrabold lg:text-3xl">
          {t("revelation.chapter6.title")}
        </h2>
        <p className="mb-3">{t("revelation.chapter6.description")}</p>
        <div className="rounded-lg">
          <h2 className="mb-5 text-2xl font-extrabold">
            {t("revelation.chapter6.interesting_facts")}
          </h2>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default memo(Chapter6);
