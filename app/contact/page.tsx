import { Globe } from "@/components/ui/globe";

export default function Home(){
    return<div>
        Global
        <Globe globeConfig={{
            pointSize: undefined,
            globeColor: undefined,
            showAtmosphere: undefined,
            atmosphereColor: undefined,
            atmosphereAltitude: undefined,
            emissive: undefined,
            emissiveIntensity: undefined,
            shininess: undefined,
            polygonColor: undefined,
            ambientLight: undefined,
            directionalLeftLight: undefined,
            directionalTopLight: undefined,
            pointLight: undefined,
            arcTime: undefined,
            arcLength: undefined,
            rings: undefined,
            maxRings: undefined,
            initialPosition: undefined,
            autoRotate: undefined,
            autoRotateSpeed: undefined
        }} data={[]}/>
    </div>
}