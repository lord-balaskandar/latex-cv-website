import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

function Model(props: {path: string, scale: number}) {
    const fbx = useLoader(FBXLoader, props.path)
    return <primitive object={fbx} scale={props.scale} />
  
  }

  
export default Model;