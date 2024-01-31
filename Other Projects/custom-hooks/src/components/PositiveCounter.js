import { useState, useEffect } from "react";
import useCounter from "./hooks/useCounter";

import Card from "./Card";

const PositiveCounter = () => {
  const counter = useCounter(true);
  return <Card>{counter}</Card>;
};

export default PositiveCounter;
