import { Canvas,useFrame } from '@react-three/fiber'
import React, { Suspense,useState,useRef } from 'react'
import { Points,PointMaterial,Preload } from '@react-three/drei'

const Stars = () => {
  return (
    <div>
      stars
    </div>
  )
}

const  StarsCanvas=()=>{
  return (
    <div>
      <Canvas camera={{position:[0,0,1]}}>
        <Suspense >
          <Stars/>
        </Suspense>
        <Preload all/>
      </Canvas>
      </div>
  )
}

export default StarsCanvas;
