import React from "react";

const Background = ({ children }) => {
  return (
    <div className="bg-gray-700 dark:bg-black transition-all">{children}</div>
  );
};

export default Background;
