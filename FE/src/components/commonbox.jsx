function CommonBox({
  backgroundColor = "transparent",
  opacity = 1,
  width = "300px",
  height = "200px",
  position = "center",
  positionType = "fixed",
  borderRadius = "30px",
  className = "",
  children,
}) {
  const positionClasses = {
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
  };

  return (
    <div
      className={`${positionType} ${positionClasses[position]} ${className}`}
      style={{
        backgroundColor,
        opacity,
        width,
        height,
        borderRadius,
      }}
    >
      {children}
    </div>
  );
}

export default CommonBox;
