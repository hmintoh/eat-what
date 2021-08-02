import React, { useState } from "react";
import { PillBarWrapper, Pill } from "@/styles/pill-bar.styles";

interface PillBarProps {
  labels: string[];
  setActive: Function;
}

const PillBar = ({ labels, setActive }: PillBarProps): JSX.Element => {
  const [activePill, setActivePill] = useState<number | undefined>(undefined);

  const handleClick = (i, label) => {
    setActivePill(i);
    setActive(label);
  };

  return (
    <PillBarWrapper role="tablist">
      {labels.map((label, i) => (
        <Pill
          key={i}
          role="tab"
          onClick={() => handleClick(i, label)}
          value={label}
          active={activePill === i}
        >
          {label}
        </Pill>
      ))}
    </PillBarWrapper>
  );
};

export default PillBar;
