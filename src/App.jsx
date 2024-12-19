import { Button } from "@mui/material";
import "./App.css";

function App() {
  return (
    <>
      <p className="text-2xl text-blue-500">
        Click on the Vite and React logos to learn more
      </p>
      <Button
        sx={{
          backgroundColor: "#0070f3",
          color: "white",
          borderRadius: "5px",
          padding: "10px",
          margin: "10px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Learn More
      </Button>
    </>
  );
}

export default App;
