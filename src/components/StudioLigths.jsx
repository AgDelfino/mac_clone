import { Environment, Lightformer } from '@react-three/drei'

const StudioLigths = () => {
  return (
    <group name='ligths'>
        <Environment resolution={256}>
            <group>
                <Lightformer form="rect" intensity={10} position={[-10,5,-5]} scale={10}/>
            </group>
        </Environment>
    </group>
  )
}

export default StudioLigths