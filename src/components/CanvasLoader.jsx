import { Html, useProgress } from "@react-three/drei";

function CanvasLoader(props) {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span className="canvas-loader"></span>
      <p style={{ font: 14, fontWeight: 800, color: "#f1f1f1", marginTop: 40 }}>
        {progress !== 0 ? `${progress.toFixed(2)}%` : "Loading..."}
      </p>
    </Html>
  );
}

export default CanvasLoader;
