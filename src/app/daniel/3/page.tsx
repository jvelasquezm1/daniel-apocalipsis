"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { memo } from "react";
import { useTranslations } from "next-intl";

const Chapter3 = () => {
  const t = useTranslations();

  return (
    <DefaultLayout>
      <div className="min-h-[100vh] p-4">
        <h2 className="mb-3 border-b pb-4 text-center text-2xl font-extrabold lg:text-3xl">
          {t("daniel.chapter3.title")}
        </h2>
        <p className="mb-3">{t("daniel.chapter3.description")}</p>
        <div className="rounded-lg">
          <h2 className="mb-5 text-2xl font-extrabold">Datos interesantes</h2>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default memo(Chapter3);
