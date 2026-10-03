// FaceChatBox.jsx
import React from "react";

export default function FaceChatBox({ localVideoRef, remoteVideoRef }) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* 원격 영상 */}
      <video
        ref={remoteVideoRef}
        autoPlay
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      {/* 로컬 영상: 원격 영상 위에 오버레이 */}
      <video
        ref={localVideoRef}
        autoPlay
        playsInline
        muted
        style={{
          position: "absolute",
          bottom: "5%",
          left: "5%",
          width: "10%",
          height: "10%",
          borderRadius: "8px",
          backgroundColor: "transparent",
          zIndex: 2,
        }}
      />
    </div>
  );
}
