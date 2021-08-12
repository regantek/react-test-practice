import React, { useState } from "react";

const Button = () => {
  const [showButton, setShowButton] = useState(false);
  return (
    <div>
      <button data-testid="button" onClick={() => setShowButton(true)}>
        Button 1
      </button>

      {showButton && <button data-testid="button">Button 2</button>}
    </div>
  );
};

export default Button;
