import { withScriptjs,withGoogleMap,GoogleMap, Marker } from "react-google-maps"
const url="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-nugaYdht1xTpXtZ7e5CI3Q0cbiVAWRU";
const MapComponent=withScriptjs(withGoogleMap(({markers})=>{
  const getZoom=()=>{
    if(markers.length===2){
      const latDistance=Math.abs(markers[0].lat-markers[1].lat);
      const lngDistance=Math.abs(markers[0].lng-markers[1].lng);
      const distance=Math.sqrt(latDistance*latDistance+lngDistance*lngDistance)
      return Math.floor(distance*4);
    }
    return 8;
  }
  const getCenter=()=>{
    if(markers.length===2){
      return {
        lat:(markers[0].lat+markers[1].lat)/2,
        lng:(markers[0].lng+markers[1].lng)/2
      }
    }
    if(markers.length===1){
      return markers[0];
    }
    return {
      lat:12.9716,
      lng:77.5946
    }
  }
  return (
    <GoogleMap
    defaultZoom={getZoom()}
    defaultCenter={getCenter()}
    >
      {
        markers.map((position,index)=>{
          return (
            <Marker position={position} key={index} />
          )
        })
      }
        {markers.length===0&&<Marker position={{
          lat:12.9716,
          lng:77.5946
        }}/>}
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