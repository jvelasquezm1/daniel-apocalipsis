import Image from "next/image";
import React, { memo } from "react";
import { StatueIdentifiers } from "../../../public/shared/identifiers";
import { Rock, StatueImage } from "../../../public/assets";

interface StatueProps {
  setIdentifier: (identifier: StatueIdentifiers) => void;
  identifierSelected: StatueIdentifiers;
}

const identifierToMargin = {
  [StatueIdentifiers.Babylon]: "mt-8",
  [StatueIdentifiers.MedoPersia]: "mt-16",
  [StatueIdentifiers.Greece]: "mt-10",
  [StatueIdentifiers.Rome]: "mt-6",
  [StatueIdentifiers.DividedKingdom]: "mt-8",
  [StatueIdentifiers.HeavenKingdom]: "mt-28",
};

const Statue: React.FC<StatueProps> = ({
  setIdentifier,
  identifierSelected,
}) => {
  return (
    <div className="mt-8 flex p-4">
      <div className="flex flex-col">
        {Object.values(StatueIdentifiers).map((identifier) => (
          <div key={identifier} className="flex">
            <button
              className={`h-12 border ${identifierToMargin[identifier]} ${
                identifier === identifierSelected && "border-b-4 border-l-4"
              } z-10 w-64 rounded-lg hover:border-b-4 hover:border-l-4`}
              onClick={() => setIdentifier(identifier)}
            >
              <span>{identifier}</span>
            </button>
            <div className="mb-8 mr-[-10rem] mt-auto flex h-0.5 w-full bg-black " />
          </div>
        ))}
      </div>
      <div className="w-96">
        <Image src={StatueImage} alt={"statue"} />
        <Image src={Rock} alt={"rock"} className="m-auto w-52" />
      </div>
    </div>
  );
};

export default memo(Statue);
