import React, { useRef, useState } from 'react';
import {Canvas, useFrame} from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { Cube, Model, Sphere } from './Objects';

function Viewport() {
    return ( 
        <div className='viewport-box'>
            <Canvas>
                <directionalLight intensity={2} position={[0,0,3]}/>
                <ambientLight intensity={1}/>
                <Model path='/lilghost.glb' scale ={1.1} position = {[0,-2,0]} />
                {/* <Sphere position={[0,1,3]} size ={[0.2,10,10]} color={'hotpink'}/> */}
                {/* <Cube position={[2,0,0]} size ={[1,3,2]} color={'steelblue'}/>*/}

                <OrbitControls/>
            </Canvas> 
        </div>
    );
}

export default Viewport;