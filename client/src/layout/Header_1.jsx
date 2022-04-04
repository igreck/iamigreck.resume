import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import { Outlet, Link } from "react-router-dom";
import "./style.css";

const Model = ({ url, ...props }) => {
  // useGLTF suspends the component, it literally stops processing
  const { scene } = useGLTF(url);
  // By the time we're here the model is gueranteed to be available
  return <primitive object={scene} {...props} />;
};

const Rotate = (props) => {
  const ref = useRef();
  useFrame((state) => (ref.current.rotation.y = state.clock.elapsedTime));
  return <group ref={ref} {...props} />;
};

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center p-8">
      <Canvas dpr={[1, 2]} camera={{ position: [-2, 2, 4], fov: 25 }}>
        <directionalLight position={[10, 10, 0]} intensity={1.5} />
        <directionalLight position={[-10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, 20, 0]} intensity={1.5} />
        <directionalLight position={[0, -10, 0]} intensity={0.25} />
        <Rotate position-y={-0.5} scale={0.2}>
          <Suspense fallback={<Model url="./BloodSword.glb" />}>
            <Model url="./BloodSword.glb" />
          </Suspense>
        </Rotate>
      </Canvas>
      <h1 className="font-bold text-gray-200 dark:text-gray-200 text-center text-3xl pt-4">
        <span className="font-sans">Salut, eu sunt </span>
        <span className="text-lime-400 dark:text-lime-400 text-5xl font-extrabold">
          @igreck
        </span>
      </h1>
    </header>
  );
};

export default Header;
