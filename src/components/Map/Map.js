import { useEffect, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
const mapboxApiAccessToken =
  "pk.eyJ1IjoiY2hpcmFuamlibmFuZHkiLCJhIjoiY2t0d3djbHA1MmIyOTJ2bnF3Z2dnMjFkdiJ9.LEo8M2aRkhZXJ7mDROxB8w";
const Map = ({ markers }) => {
  const getZoom = () => {
    if (markers.length === 2) {
      const latDistance = Math.abs(markers[0].lat - markers[1].lat);
      const lngDistance = Math.abs(markers[0].lng - markers[1].lng);
      const distance = Math.sqrt(
        latDistance * latDistance + lngDistance * lngDistance
      );
      return Math.floor(distance * 4);
    }
    return 8;
  };
  const getCenter = () => {
    if (markers.length === 2) {
      return markers[1];
      return {
        lat: (markers[0].lat + markers[1].lat) / 2,
        lng: (markers[0].lng + markers[1].lng) / 2,
      };
    }
    if (markers.length === 1) {
      return markers[0];
    }
    return {
      lat: 12.9716,
      lng: 77.5946,
    };
  };
  const { lat, lng } = getCenter();
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: lat,
    longitude: lng,
    zoom: getZoom(),
  });
  useEffect(() => {
    const { lat, lng } = getCenter();
    setViewport({
      ...viewport,
      latitude: lat,
      longitude: lng,
      zoom: getZoom(),
    });
  }, [markers]);
  if (markers.length === 0) {
    return (
      <ReactMapGL
        onViewportChange={(viewport) => setViewport(viewport)}
        mapboxApiAccessToken={mapboxApiAccessToken}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        {...viewport}
      >
        {
          <Marker latitude={12.9716} longitude={77.5946}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f2/678111-map-marker-512.png"
              width={50}
              height={50}
            />
          </Marker>
        }
      </ReactMapGL>
    );
  } else {
    return (
      <ReactMapGL
        onViewportChange={(viewport) => setViewport(viewport)}
        mapboxApiAccessToken={mapboxApiAccessToken}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        {...viewport}
      >
        {markers.map((position, index) => {
          const { lat, lng } = position;
          return (
            <Marker latitude={lat} longitude={lng} key={index}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f2/678111-map-marker-512.png"
                width={50}
                height={50}
              />
            </Marker>
          );
        })}
      </ReactMapGL>
    );
  }
};
export { Map };
