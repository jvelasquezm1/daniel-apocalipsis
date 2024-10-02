import React, { memo } from "react";
import {
  Identifiers,
  StatueIdentifiers,
} from "../../../public/shared/identifiers";
import { Bear, Beast, Horn, Leopard, Lion } from "../../../public/assets";
import { omit } from "lodash";
import HorizontalScrollable from "../HorizontalScrollable";

interface BeastsProps {
  setIdentifier: (identifier: Identifiers) => void;
  identifierSelected: StatueIdentifiers;
}

const BeastsImages = [Lion, Bear, Leopard, Beast, Horn];

const Beasts: React.FC<BeastsProps> = ({
  setIdentifier,
  identifierSelected,
}) => {
  return (
    <HorizontalScrollable
      setIdentifier={setIdentifier}
      identifierSelected={identifierSelected}
      identifiers={Object.values(omit(StatueIdentifiers, "HeavenKingdom"))}
      images={BeastsImages}
    />
  );
};

export default memo(Beasts);
