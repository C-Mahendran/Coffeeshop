import React, { useState } from 'react';

export default function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <button onClick={handleToggle} className="toggle-button">
      {isToggled ? 'ON' : 'OFF'}
    </button>
  );
}


