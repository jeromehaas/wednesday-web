import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const Model = () => {

  const mesh = useRef()

  useFrame((state) => {
		const time = state.clock.getElapsedTime();
		(mesh.current.rotation.y = time * 0.1)
	});

  return (
    <mesh ref={ mesh } scale={ 1.25 }>
      <sphereGeometry args={ [2, 32, 32] } />
      <meshBasicMaterial color="#c6c6c6" wireframe={ true } />
    </mesh>
  );
};

const Globe = ({ className }) => (
	<div className={` ${ className ? className : '' } globe `}>
  	<Canvas>
    	<Model position={[0, 0, 0]} />
  	</Canvas>
	</div>
)

export default Globe;