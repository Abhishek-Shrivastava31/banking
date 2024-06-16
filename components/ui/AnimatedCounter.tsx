"use client";

// this is used to format amount in indian currency system and converts it into string ...but not used in this case as we are using count-up library and it requires a number not a string
import { formatAmount } from "@/lib/utils";

import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  // const val = formatAmount(amount);
  return (
    <>
      <CountUp
        prefix="₹"
        decimal="."
        decimals={2}
        duration={1.5}
        end={amount}
      />
      {/* {val}  */}
    </>
  );
};

export default AnimatedCounter;
