"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { memo } from "react";
import { useTranslations } from "next-intl";

const Chapter9 = () => {
  const t = useTranslations();

  return (
    <DefaultLayout>
      <div className="min-h-[100vh] p-4">
        <h2 className="mb-3 border-b pb-4 text-center text-2xl font-extrabold lg:text-3xl">
          {t("daniel.chapter9.title")}
        </h2>
        <p className="mb-3">{t("daniel.chapter9.description")}</p>
        <div className="rounded-lg">
          <h2 className="mb-5 text-2xl font-extrabold">
            {t("daniel.chapter9.interesting_facts")}
          </h2>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default memo(Chapter9);
