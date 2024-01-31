import { useState, useEffect } from "react";

import Card from "./Card";
import useCounter from "./hooks/useCounter";

const NegativeCounter = () => {
  const counter = useCounter(false)
  return <Card>{counter}</Card>;
};

export default NegativeCounter;
