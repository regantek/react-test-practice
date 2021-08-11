import React, { useState } from "react";

const Button = () => {
  const [showButton, setShowButton] = useState(false);
  return (
    <div>
      <button onClick={() => setShowButton(true)}>Button 1</button>

      {showButton && <button>Button 2</button>}
    </div>
  );
};

export default Button;
