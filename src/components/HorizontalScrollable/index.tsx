import Image, { StaticImageData } from "next/image";
import React, { memo, useRef, useState } from "react";
import { Identifiers } from "../../../public/shared/identifiers";

export interface HorizontalScrollableProps<T> {
  setIdentifier: (identifier: T) => void;
  identifierSelected: T;
  identifiers: T[];
  images: StaticImageData[];
}

const HorizontalScrollable = <T extends Identifiers>({
  setIdentifier,
  identifierSelected,
  identifiers,
  images,
}: HorizontalScrollableProps<T>) => {
  const [hoveredIdentifier, setHoveredIdentifier] = useState<T | null>(null);
  const ContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="mt-4 flex flex-col items-center">
      <div className="flex items-center space-x-4">
        <div
          ref={ContainerRef}
          className="flex w-full flex-row items-center gap-8 space-x-4 overflow-auto"
        >
          {identifiers.map((identifier, index) => (
            <div key={index} className="flex flex-col items-center space-x-4">
              <div className="relative">
                {[identifierSelected, hoveredIdentifier].includes(
                  identifier,
                ) && (
                  <button
                    onClick={() => setIdentifier(identifier)}
                    className="absolute inset-0 flex h-28 w-28 items-center justify-center rounded-full border-4 border-blue-900 bg-black bg-opacity-50 text-white"
                  >
                    <span className="text-xs">titulo</span>
                  </button>
                )}
                <Image
                  src={images[index]}
                  alt={`${identifier}`}
                  className="h-28 w-28 cursor-pointer rounded-full"
                  onMouseMove={() => setHoveredIdentifier(identifier)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(HorizontalScrollable);
