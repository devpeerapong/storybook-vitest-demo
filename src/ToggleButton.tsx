import { useState } from "react";

export function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return <button onClick={handleClick}>{isOn ? "On" : "Off"}</button>;
}
