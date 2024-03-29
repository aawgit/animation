import { Canvas } from "@react-three/fiber";
import { Universe } from "./components/Universe";
import { Suspense } from "react";

function App() {
  return (
    <div>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas>
          {/* <Suspense> */}
          <Universe />
          {/* </Suspense> */}
        </Canvas>
      </div>
    </div>
  );
}

export default App;
