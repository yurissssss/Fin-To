import React, { useRef, useState, useEffect } from "react";
import ChatBox from "./Components/ChatBox";
import FaceChatBox from "./Components/FaceChatBox";
import micicon from "./icon/mic.png"
import videoicon from "./icon/video.png"
import phoneicon from "./icon/phone-off.png"

// 나중에 8080으로 바꾸면 될듯
const SIGNALING_SERVER = "ws://localhost:3001";

export default function ChattingPage() {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const wsRef = useRef(null);
  const pcRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    wsRef.current = new WebSocket(SIGNALING_SERVER);

    wsRef.current.onmessage = async (event) => {
      const data = JSON.parse(event.data);
      if (!pcRef.current) return;

      switch (data.type) {
        case "offer": {
          await pcRef.current.setRemoteDescription(data.offer);
          const answer = await pcRef.current.createAnswer();
          await pcRef.current.setLocalDescription(answer);  
          wsRef.current.send(JSON.stringify({ type: "answer", answer }));
          break;
        }

        case "answer": {
          await pcRef.current.setRemoteDescription(data.answer);
          break;
        }

        case "ice": {
          try {
            await pcRef.current.addIceCandidate(data.candidate);
          } catch (e) {
            console.error("Error adding ICE candidate", e);
          }
          break;
        }

        case "chat": {
          setMessages((prev) => [...prev, { text: data.message, sender: "other" }]);
          break;
        }

        default:
          break;
      }
    };

    startConnection();

    return () => {
      if (wsRef.current) wsRef.current.close();
      if (pcRef.current) pcRef.current.close();
    };
  }, []);

  const startConnection = async () => {
    const pc = new RTCPeerConnection();
    pcRef.current = pc;

    // ICE candidate 전송
    pc.onicecandidate = (event) => {
      if (event.candidate) {
        wsRef.current.send(JSON.stringify({ type: "ice", candidate: event.candidate }));
      }
    };

    // 원격 스트림 연결
    pc.ontrack = (event) => {
      remoteVideoRef.current.srcObject = event.streams[0];
    };

    // 로컬 미디어 가져오기
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideoRef.current.srcObject = stream;
    stream.getTracks().forEach((track) => pc.addTrack(track, stream));

    // offer 생성 후 전송
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    wsRef.current.send(JSON.stringify({ type: "offer", offer }));
  };

  const sendMessage = () => {
    if (!input) return;
    wsRef.current.send(JSON.stringify({ type: "chat", message: input }));
    setMessages((prev) => [...prev, { text: input, sender: "me" }]);
    setInput("");
  };

  return (
    <div style={{ display: "flex", height: "90vh", gap: "20px", padding: "20px" }}>
  {/* 왼쪽 화상채팅 */}
<div style={{ flex: 7.5, height: "85vh", display: "flex", flexDirection: "column" }}>
  <FaceChatBox remoteVideoRef={remoteVideoRef} localVideoRef={localVideoRef} />

<div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
  <button
  style={{
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "none",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    cursor: "pointer",
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <img 
    src={micicon}  // 👉 네가 지정해놓은 경로
    alt="Mic Icon"
    style={{
      width: "60%",   // 버튼 안에서 적당히 줄여줌
      height: "60%",
      objectFit: "contain",
    }}
  />
</button>

  <button
      style={{
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "none",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    cursor: "pointer",
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
  >
    <img 
    src={videoicon}  // 👉 네가 지정해놓은 경로
    alt="Video Icon"
    style={{
      width: "60%",   // 버튼 안에서 적당히 줄여줌
      height: "60%",
      objectFit: "contain",
    }}
  />
  </button>
  <button
      style={{
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "none",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    cursor: "pointer",
    backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
  >
    <img 
    src={phoneicon}  // 👉 네가 지정해놓은 경로
    alt="Video Icon"
    style={{
      width: "60%",   // 버튼 안에서 적당히 줄여줌
      height: "60%",
      objectFit: "contain",
    }}
  />
  </button>
</div>

</div>
  {/* 오른쪽 채팅 */}
<div style={{ flex: 2.5, display: "flex", flexDirection: "column"}}>
  <h3>Chat</h3>
  <div
    style={{
      flex: 1,
      border: "1px solid #ccc",
      overflowY: "auto",
      padding: "10px",
      marginBottom: "10px",
    }}
  >
    {messages.map((msg, i) => (
      <ChatBox key={i} isMine={msg.sender === "me"}>
        {msg.text}
      </ChatBox>
    ))}
  </div>
  <div style={{ display: "flex" }}>
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      style={{ flex: 1, marginRight: "5px" }}
    />
    <button onClick={sendMessage}>Send</button>
  </div>
</div>

</div>
  );
}