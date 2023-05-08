import { Canvas } from 'react-three-fiber'
import IntroButton from '../../components/introButton/introButton'
import Model from '../../components/model'
import background from './background.mp4'
import React from 'react'
import { OrbitControls } from '@react-three/drei'
function Intro() {
    return <div className = "Page">
        
        <video src={background} autoPlay loop muted/>
        
        <div className='PageContent'>
            <div className='PageSubContent'>
            <div className='IntroTitle'>{"Thanushen \n Balaskandar"}</div>
            <div className='IntroSubHeading'>Passionate Software Developer</div>
            <div className='sword'>
            <Canvas camera={{ position: [100, 5, 150] , rotation: [2, 0, 4.7], zoom: 0.4}}>    
                <Model path="./sword.fbx" scale={0.065}/>
                <OrbitControls  enablePan={false} autoRotate />
            </Canvas>
            </div>
            <div className='introSection'>
            <IntroButton display="Experience"/>
            <IntroButton display="Qualifications"/>
            <IntroButton display="Education"/>
            <IntroButton display="Technical Skills"/>
            <IntroButton display="Key Skills"/>
            </div>
        </div>
        </div>
    </div>
}

export default Intro