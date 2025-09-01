"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { memo } from "react";
import { useTranslations } from "next-intl";

const Chapter10 = () => {
  const t = useTranslations();

  return (
    <DefaultLayout>
      <div className="min-h-[100vh] p-4">
        <h2 className="mb-3 border-b pb-4 text-center text-2xl font-extrabold lg:text-3xl">
          {t("daniel.chapter10.title")}
        </h2>
        <p className="mb-3">{t("daniel.chapter10.description")}</p>
        <div className="rounded-lg">
          <h2 className="mb-5 text-2xl font-extrabold">
            {t("daniel.chapter10.interesting_facts_title")}
          </h2>
          <ul className="text-gray-700 dark:text-gray-300 list-inside list-disc space-y-2">
            {Object.values(
              t.raw("daniel.chapter10.interesting_facts") as Record<
                string,
                string
              >,
            ).map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default memo(Chapter10);
