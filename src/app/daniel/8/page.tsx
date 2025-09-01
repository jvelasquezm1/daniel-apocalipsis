"use client";
import React, { memo, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useTranslations } from "next-intl";
import {
  Event,
  events,
  eventGroups,
  buttonsConfig,
  generateClassNames,
} from "./TimelineContent";

const Chapter8: React.FC = () => {
  const t = useTranslations();
  const [activeEvents, setActiveEvents] = useState<Event[]>(events);
  const [timelapse, setTimelapse] = useState<number>(2300);

  const switchWeeks = (targetTimelapse: number) => {
    setActiveEvents(eventGroups[targetTimelapse]);
    setTimelapse(targetTimelapse);
  };

  const resetTimeline = () => {
    setActiveEvents(events);
    setTimelapse(2300);
  };

  return (
    <DefaultLayout>
      <div className="relative p-4">
        <h2 className="mb-3 border-b pb-4 text-center text-2xl font-extrabold lg:text-3xl">
          {t("daniel.chapter8.title")}
        </h2>
        <div className="mb-4 text-center">
          {timelapse !== 2300 && (
            <button
              onClick={resetTimeline}
              className="text-gray-600 dark:text-gray-400 mx-auto flex items-center justify-center rounded-md px-4 py-2 font-medium transition-colors duration-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                />
              </svg>
              {t("daniel.chapter8.timeline.backToOverview")}
            </button>
          )}
        </div>

        <h3 className="mb-3 pb-2 text-center text-xl font-extrabold">
          {t("daniel.chapter8.timeline.currentTimelapse", { timelapse })}
        </h3>

        <div className="flex w-full flex-col items-center overflow-x-auto">
          <div className="relative flex w-full justify-center">
            {activeEvents.map((event) => (
              <div
                key={event.year}
                className="relative flex w-full flex-col items-center"
              >
                {buttonsConfig.map(
                  (btn) =>
                    event.year === btn.year &&
                    timelapse === btn.timelapse && (
                      <button
                        key={btn.labelKey}
                        onClick={() => switchWeeks(btn.targetTimelapse)}
                        disabled={btn.timelapse === btn.targetTimelapse}
                        className={`${btn.buttonWidth} absolute z-20 m-auto h-32 translate-x-1/2 rounded font-bold 
                          ${
                            btn.timelapse === btn.targetTimelapse
                              ? "bg-gray-300 text-gray-600 dark:bg-gray-700 dark:text-gray-400 cursor-not-allowed"
                              : "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                          }
                        `}
                      >
                        {t(btn.labelKey)}
                      </button>
                    ),
                )}
                <div className={generateClassNames(event, timelapse)} />
                <button className="z-10 h-4 w-4 rounded-full bg-blue-500" />
                <div className="mt-2 text-center">
                  <p className="text-xl font-bold">{event.year}</p>
                  <p className="text-sm">{t(event.descriptionKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 mt-8 rounded-lg p-6 shadow-md">
          <h2 className="text-gray-900 mb-4 text-xl font-extrabold dark:text-white lg:text-2xl">
            {t(`daniel.chapter8.timeline.description${timelapse}`)}
          </h2>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default memo(Chapter8);
