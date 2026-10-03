export default function ChatBox({ children, isMine }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: isMine ? "flex-end" : "flex-start",
        margin: "5px 0",
      }}
    >
      <div
        style={{
          backgroundColor: isMine ? "#aee1ff" : "#ffffff", 
          color: "#000",
          padding: "10px 14px",
          borderRadius: "16px",
          maxWidth: "70%",
          wordBreak: "break-word",
          fontSize: "14px",
          lineHeight: "1.4",
          boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
