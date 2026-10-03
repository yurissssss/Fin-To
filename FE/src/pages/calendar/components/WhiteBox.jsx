import React from "react";

export default function WhiteBox({ width, height, top, left, position, children }) {
  return (
    <div
      className={`${width} ${height} ${top} ${left} ${position} bg-white border border-gray-300 shadow-lg`}
      style={{ borderRadius: "30px" }}
    >
      {children}
    </div>
  );
}

