"use client";
import React, { memo, useState } from "react";
import Beasts from "@/components/Beasts";
import {
  Identifiers,
  StatueIdentifiers,
} from "../../../../public/shared/identifiers";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useTranslations } from "next-intl";

const Chapter7 = () => {
  const [identifier, setIdentifier] = useState(StatueIdentifiers.Babylon);
  const handleSetIdentifier = (newIdentifier: Identifiers) => {
    setIdentifier(newIdentifier as StatueIdentifiers);
  };
  const t = useTranslations();

  return (
    <DefaultLayout>
      <div className="p-4">
        <h2 className="mb-3 border-b pb-4 text-center text-3xl font-extrabold">
          {t("daniel.chapter7.title")}
        </h2>
        <Beasts
          setIdentifier={handleSetIdentifier}
          identifierSelected={identifier}
        />
        <div
          className={`static left-0 top-0 m-4 flex flex-col overflow-y-auto overflow-x-hidden rounded-md bg-white p-4`}
        >
          <div className="relative flex-auto text-sm lg:text-base">
            {identifier}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default memo(Chapter7);
