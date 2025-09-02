"use client";

import React from "react";

const Button = ({ children, className = "", action = () => {} }) => {
  return (
    <button
      className={`bg-black cursor-pointer text-white text-[14px] px-4 py-2 rounded-[18px] ${className}`}
      onClick={action}
    >
      {children}
    </button>
  );
};

export default Button;
