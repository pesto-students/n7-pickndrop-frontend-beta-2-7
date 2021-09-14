import { GoogleMap, Marker } from "react-google-maps"

const Map=()=>{
  return(
    <GoogleMap
    defaultZoom={8}
    defaultCenter={{
      lat:12.9716,
      lng:77.5946
    }}
    >
    <Marker position={{
      lat:12.9716,
      lng:77.5946
    }}/>
    </GoogleMap>)
}
export {Map};