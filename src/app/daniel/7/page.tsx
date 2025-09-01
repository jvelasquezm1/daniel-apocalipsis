"use client";
import React, { memo, useState } from "react";
import Beasts from "@/components/Beasts";
import {
  Identifiers,
  StatueIdentifiers,
} from "../../../../public/shared/identifiers";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { daniel7BeastsContent, BeastContent } from "./BeastsContent";

enum BeastIdentifiers {
  Lion = "lion",
  Bear = "bear",
  Leopard = "leopard",
  DreadfulBeast = "dreadfulBeast",
  LittleHorn = "littleHorn",
}

const Chapter7 = () => {
  const [selectedBeast, setSelectedBeast] = useState<
    keyof typeof daniel7BeastsContent
  >(BeastIdentifiers.Lion);
  const t = useTranslations();

  const renderBeastContent = () => {
    const currentBeast = daniel7BeastsContent[selectedBeast];
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <h3 className="mb-4 text-xl font-bold">{t(currentBeast.title)}</h3>
        <Image
          src={currentBeast.image}
          alt={t(currentBeast.title)}
          width={300}
          height={300}
          className="mb-4 rounded-md shadow-lg"
        />
        <p className="text-gray-700 dark:text-gray-300 text-center text-base leading-relaxed">
          {t(currentBeast.description)}
        </p>
      </div>
    );
  };

  return (
    <DefaultLayout>
      <div className="p-4">
        <h2 className="mb-3 border-b pb-4 text-center text-2xl font-extrabold lg:text-3xl">
          {t("daniel.chapter7.title")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
          {t("daniel.chapter7.description")}
        </p>
        <div className="no-scrollbar mb-8 flex justify-center gap-4 overflow-x-auto p-2">
          {Object.entries(daniel7BeastsContent).map(
            ([beastKey, beast]: [string, BeastContent]) => (
              <div
                key={beastKey}
                onClick={() =>
                  setSelectedBeast(
                    beastKey as keyof typeof daniel7BeastsContent,
                  )
                }
                className={`group relative flex h-28 w-28 flex-shrink-0 cursor-pointer items-center justify-center rounded-full transition-all duration-200
                  ${
                    selectedBeast === beastKey
                      ? "bg-blue-100 ring-4 ring-blue-500 dark:bg-blue-800"
                      : "hover:bg-gray-200 dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-800"
                  }`}
              >
                <Image
                  src={beast.image}
                  alt={t(beast.title)}
                  width={80}
                  height={80}
                  className={`rounded-full transition-transform duration-200
                    ${selectedBeast === beastKey ? "scale-105" : ""}`}
                />
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <p className="p-2 text-center text-sm font-medium text-white">
                    {t(beast.nationKey)}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 mt-8 rounded-lg p-6 shadow-md">
          {renderBeastContent()}
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 mt-8 rounded-lg p-6 shadow-md">
          <h2 className="text-gray-900 mb-4 text-xl font-extrabold dark:text-white lg:text-2xl">
            {t("daniel.chapter7.interesting_facts_title")}
          </h2>
          <ul className="text-gray-700 dark:text-gray-300 list-inside list-disc space-y-2">
            {Object.values(
              t.raw("daniel.chapter7.interesting_facts") as Record<
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

export default memo(Chapter7);
