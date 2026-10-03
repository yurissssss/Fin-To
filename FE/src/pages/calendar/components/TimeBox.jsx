import React from "react";
import WhiteBox from "./WhiteBox";

export default function TimeBox({ strattime, endtime }) {
  return (
    <WhiteBox
      width="100%"       // WhiteBox는 부모 크기 전체
      height="100%"
      position="relative"
      top="0"
      left="0"
    >
      <div
        style={{
          width: "90%",
          height: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16pt",
          margin: "auto",
        }}
      >
        {strattime} ~ {endtime}
      </div>
    </WhiteBox>
  );
}
