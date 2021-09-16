import { withScriptjs,withGoogleMap,GoogleMap, Marker } from "react-google-maps"
const url="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-nugaYdht1xTpXtZ7e5CI3Q0cbiVAWRU";
const MapComponent=withScriptjs(withGoogleMap(({markers})=>{
  return (
    <GoogleMap
    defaultZoom={8}
    defaultCenter={{
      lat:12.9716,
      lng:77.5946
    }}
    >
      {
        markers.length?
        markers.map((position,index)=>{
          return (
            <Marker position={position} key={index} />
          )
        }):
        <Marker position={{
          lat:12.9716,
          lng:77.5946
        }}/>
      }
    </GoogleMap>)
}));
const Map=props=>{
  return <MapComponent {...props} 
  googleMapURL={url}
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `${0.8*window.innerHeight}px`,width:`${window.innerWidth}px` }} />}
  mapElement={<div style={{ height: `100%` }} />}/>
}
export {Map};