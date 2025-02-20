import React, { useState, useRef } from "react";
import { Suspense, lazy } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import {
  Center,
  Text3D,
  Instance,
  Instances,
  Environment,
  Lightformer,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  MeshTransmissionMaterial,
  PerspectiveCamera,
  Float,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import { Car } from "./Car";
import { easing } from "maath";
import { Perf } from "r3f-perf";
import Loading from "./Loading";

const Scene = ({ progress }) => {
  const cameraRef = useRef();
  useFrame((state, delta) => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(0, 0, 0);
    }
  });
  return (
    // <Suspense
    //   fallback={<Loading/>}
    // >
    <>
      {/* <axesHelper args={[50]} /> */}
      {/* <Perf position={"bottom-left"} /> */}

      <PerspectiveCamera
        ref={cameraRef}
        fov={45}
        near={0.1}
        far={10000}
        position={[10, 15, 35]}
        makeDefault
      />

      {/* <EffectComposer>
                <Bloom
                intensity={20}
                luminanceThreshold={0}
                luminanceSmoothing={0.9}
                // height={0}
                />
                </EffectComposer> */}

      {/* <color attach="background" args={["gray"]} /> */}

      <pointLight intensity={500} color={"white"} position={[10, 6, 10]} />
      <pointLight intensity={500} color={"white"} position={[-10, 6, -10]} />
      <pointLight intensity={500} color={"white"} position={[10, 6, -10]} />
      <pointLight intensity={500} color={"white"} position={[-10, 6, 10]} />

      <OrbitControls
            // enabled={false}
            enablePan={false}
            // enableRotate={false}
            dampingFactor={0.05}
            minPolarAngle={Math.PI /5}
            maxPolarAngle={Math.PI /1.5}
            makeDefault
            //  maxZoom={1000}
            // minZoom={1000}
            maxDistance={35}
            minDistance={35}
            enableDamping
            enableZoom
            // minAzimuthAngle={-Math.PI/2-.3}
            // maxAzimuthAngle={Math.PI / 2+.3}
            />

      {/* <axesHelper args={[500]} /> */}

      <Float speed={2} rotationIntensity={1}>
        <Car progress={progress} />
        {/* <Rig /> */}
      </Float>
    </>
  );
};

// function Rig() {
//   useFrame((state, delta) => {
//     easing.damp3(
//       state.camera.position,
//       [19 + state.pointer.x * 4, 8 + state.pointer.y * 4, 20],
//       0.4,
//       delta
//     );
//     // easing.damp3(state.camera.position, [5 + state.pointer.x, 5 +Math.atan2(state.pointer.x, state.pointer.y) * 2, 15], 0.4, delta)
//     state.camera.lookAt(0, 0, 0);
//   });
// }

export default Scene;
