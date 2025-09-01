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
          {t("daniel.chapter6.title")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
          {t("daniel.chapter6.description")}
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 mt-8 rounded-lg p-6 shadow-md">
          <h2 className="text-gray-900 mb-4 text-xl font-extrabold dark:text-white lg:text-2xl">
            {t("daniel.chapter6.interesting_facts_title")}
          </h2>
          <ul className="text-gray-700 dark:text-gray-300 list-inside list-disc space-y-2">
            {Object.values(
              t.raw("daniel.chapter6.interesting_facts") as Record<
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

export default memo(Chapter6);
