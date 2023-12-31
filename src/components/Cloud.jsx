/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Cloud({ opacity, ...props }) {
  const { nodes, materials } = useGLTF("./models/cloud/model.glb");

  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Node.geometry}>
        <meshStandardMaterial
          envMapIntensity={2}
          transparent
          opacity={opacity}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/cloud/model.glb");
