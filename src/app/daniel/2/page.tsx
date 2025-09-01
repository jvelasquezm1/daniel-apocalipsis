"use client";

import React, { memo, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { StatueIdentifiers } from "../../../../public/shared/identifiers";
import {
  BabylonMap,
  CalendarIcon,
  MapSVG,
  GreeceMap,
  MedoPersiaMap,
  RomeMap,
  Book,
  Pen,
  Symbols,
  BabylonTodayMap,
  Heaven,
  World,
} from "../../../../public/assets";
import Statue from "@/components/Statue";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Content } from "./Content";
import { RenderTextContent } from "./RenderTextContent";

enum SectionsChapter2 {
  History = "History",
  Maps = "Maps",
  Verses = "Verses",
  Prophecy = "Prophecy",
  Symbols = "Symbols",
}

const Chapter2 = () => {
  const [identifier, setIdentifier] = useState(StatueIdentifiers.Babylon);
  const [selectedSection, setSelectedSection] = useState(
    SectionsChapter2.History,
  );
  const t = useTranslations();

  const renderSectionContent = (section: SectionsChapter2) => {
    const kingdomContent = Content[getIdentifierKey(identifier)];
    const title = kingdomContent.title;

    const contentKey = section.toLowerCase();
    const contentArray =
      kingdomContent[contentKey as keyof typeof kingdomContent];

    if (
      Array.isArray(contentArray) &&
      contentArray.every((item) => typeof item === "string")
    ) {
      const itemClassName =
        section === SectionsChapter2.Verses ? "italic" : undefined;
      return (
        <RenderTextContent
          title={title}
          content={contentArray}
          itemClassName={itemClassName}
        />
      );
    }

    return null;
  };

  const getIdentifierKey = (
    identifier: StatueIdentifiers,
  ): keyof typeof Content => {
    switch (identifier) {
      case StatueIdentifiers.Babylon:
        return "babylon";
      case StatueIdentifiers.MedoPersia:
        return "medoPersia";
      case StatueIdentifiers.Greece:
        return "greece";
      case StatueIdentifiers.Rome:
        return "rome";
      case StatueIdentifiers.DividedKingdom:
        return "dividedKingdom";
      case StatueIdentifiers.HeavenKingdom:
        return "heavenKingdom";
      default:
        return "babylon"; // Fallback
    }
  };

  const identifierToMap = {
    [StatueIdentifiers.Babylon]: BabylonMap,
    [StatueIdentifiers.MedoPersia]: MedoPersiaMap,
    [StatueIdentifiers.Greece]: GreeceMap,
    [StatueIdentifiers.Rome]: RomeMap,
    [StatueIdentifiers.DividedKingdom]: World,
    [StatueIdentifiers.HeavenKingdom]: Heaven,
  };

  const identifierToTodayMap = {
    [StatueIdentifiers.Babylon]: BabylonTodayMap,
    [StatueIdentifiers.MedoPersia]: MedoPersiaMap,
    [StatueIdentifiers.Greece]: GreeceMap,
    [StatueIdentifiers.Rome]: RomeMap,
    [StatueIdentifiers.DividedKingdom]: World,
    [StatueIdentifiers.HeavenKingdom]: "",
  };

  const sectionIcons = {
    [SectionsChapter2.History]: CalendarIcon,
    [SectionsChapter2.Maps]: MapSVG,
    [SectionsChapter2.Verses]: Book,
    [SectionsChapter2.Prophecy]: Pen,
    [SectionsChapter2.Symbols]: Symbols,
  };

  return (
    <DefaultLayout>
      <div className="p-4">
        <h2 className="mb-3 border-b pb-4 text-center text-2xl font-extrabold lg:text-3xl">
          {t("daniel.chapter2.title")}
        </h2>
        <div className="flex flex-col lg:flex-row">
          <div className="mb-4 flex-1 lg:mb-0 lg:mr-4">
            <Statue
              setIdentifier={setIdentifier}
              identifierSelected={identifier}
            />
          </div>
          <div className="m-4 flex flex-1 flex-col space-y-4 rounded-md bg-white p-4 lg:p-8">
            <span className="border-b-2 pb-4 text-center text-lg font-semibold">
              Titulo
            </span>
            <div className="rounded-lg">
              <ol className="flex items-center justify-between border-b-2 pb-4">
                {Object.values(SectionsChapter2).map((section) => {
                  const isSectionSelected = selectedSection === section;
                  const IconComponent = sectionIcons[section];
                  return (
                    <li
                      key={section}
                      className="relative flex-1 cursor-pointer"
                      onClick={() => setSelectedSection(section)}
                    >
                      <div className="flex items-center">
                        <div className={"flex w-full shrink-0 items-center"}>
                          <IconComponent
                            className={`${
                              isSectionSelected
                                ? "h-8 w-8 fill-white stroke-black lg:h-10 lg:w-10"
                                : "h-6 w-6 fill-white stroke-black hover:fill-black"
                            }`}
                          />
                          <div className="flex h-0.5 w-full bg-black " />
                        </div>
                      </div>
                      <div className="mt-2 lg:mt-3">
                        <h3 className="text-sm font-semibold lg:text-base">
                          {t(
                            `daniel.chapter2.sections.${section.toLowerCase()}`,
                          )}
                        </h3>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div
              className={`static left-0 top-0 flex w-full flex-col overflow-y-auto overflow-x-hidden rounded-md`}
            >
              <div className="relative flex-auto text-sm lg:text-base">
                {renderSectionContent(selectedSection)}
              </div>
              {selectedSection === SectionsChapter2.Maps && (
                <div className="flex space-x-4 p-2">
                  <Image
                    className={"w-[48%]"}
                    src={identifierToMap[identifier]}
                    alt={`${identifier}.${selectedSection}`}
                  />
                  {identifierToTodayMap[identifier] && (
                    <Image
                      className={"w-[48%]"}
                      src={identifierToTodayMap[identifier]}
                      alt={`${identifier}.${selectedSection}2`}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default memo(Chapter2);
