export interface Event {
  year: number;
  descriptionKey: string;
}

export interface ButtonConfig {
  year: number;
  timelapse: number;
  targetTimelapse: number;
  labelKey: string;
  buttonWidth: string;
}

export const events: Event[] = [
  {
    year: 457,
    descriptionKey: "daniel.chapter8.timeline.event1",
  },
  {
    year: 408,
    descriptionKey: "daniel.chapter8.timeline.event2",
  },
  { year: 27, descriptionKey: "daniel.chapter8.timeline.event3" },
  { year: 31, descriptionKey: "daniel.chapter8.timeline.event4" },
  { year: 34, descriptionKey: "daniel.chapter8.timeline.event5" },
  {
    year: 1844,
    descriptionKey: "daniel.chapter8.timeline.event6",
  },
];

export const eventGroups: { [key: number]: Event[] } = {
  2300: events,
  70: events.filter((event) => event.year !== 1844),
  1: events.filter((event) => [27, 31, 34].includes(event.year)),
  1810: events.filter((event) => [34, 1844].includes(event.year)),
};

export const buttonsConfig: ButtonConfig[] = [
  {
    year: 457,
    timelapse: 2300,
    targetTimelapse: 70,
    labelKey: "daniel.chapter8.timeline.button70weeks",
    buttonWidth: "w-[400%]",
  },
  {
    year: 34,
    timelapse: 2300,
    targetTimelapse: 1810,
    labelKey: "daniel.chapter8.timeline.button1810years",
    buttonWidth: "w-full",
  },
  {
    year: 457,
    timelapse: 70,
    targetTimelapse: 70,
    labelKey: "daniel.chapter8.timeline.button7weeks",
    buttonWidth: "w-full",
  },
  {
    year: 408,
    timelapse: 70,
    targetTimelapse: 70,
    labelKey: "daniel.chapter8.timeline.button69weeks",
    buttonWidth: "w-[100%]",
  },
  {
    year: 27,
    timelapse: 70,
    targetTimelapse: 1,
    labelKey: "daniel.chapter8.timeline.button1week",
    buttonWidth: "w-[200%]",
  },
  {
    year: 27,
    timelapse: 1,
    targetTimelapse: 1,
    labelKey: "daniel.chapter8.timeline.buttonhalfweek1",
    buttonWidth: "w-[100%]",
  },
  {
    year: 31,
    timelapse: 1,
    targetTimelapse: 1,
    labelKey: "daniel.chapter8.timeline.buttonhalfweek2",
    buttonWidth: "w-[100%]",
  },
];

export const generateClassNames = (event: Event, timelapse: number): string => {
  let classNames = "h-32 translate-y-2 z-0 translate-x-1/2 ";
  if (event.year === 457) classNames += "w-[400%] border-2 ";
  if (
    (event.year === 34 && timelapse === 2300) ||
    (event.year === 31 && timelapse === 1)
  )
    classNames += "border-2 border-l-0 w-[100%] ";
  if (
    (event.year === 408 && timelapse === 70) ||
    (event.year === 27 && timelapse === 1)
  )
    classNames += "border-2 w-[100%] ";
  return classNames.trim();
};
