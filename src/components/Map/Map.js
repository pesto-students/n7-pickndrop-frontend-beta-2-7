import { useEffect, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";


// eslint-disable-next-line import/no-webpack-loader-syntax
ReactMapGL.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const mapboxApiAccessToken =
  "pk.eyJ1IjoiY2hpcmFuamlibmFuZHkiLCJhIjoiY2t0d3djbHA1MmIyOTJ2bnF3Z2dnMjFkdiJ9.LEo8M2aRkhZXJ7mDROxB8w";

const Map = ({ markers, zoom }) => {
	const getZoom = () => {
		if (markers.length === 2) {
			const latDistance = Math.floor(markers[0].lat - markers[1].lat);
			const lngDistance = Math.floor(markers[0].lng - markers[1].lng);
			const distance = Math.sqrt(latDistance * latDistance + lngDistance * lngDistance);
			console.log(distance)
			return Math.floor(distance * 9.8);
		}
		return 8;
	};

  const getCenter = () => {
    if (markers.length === 2) {
      return markers[1];
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
		width: "100%",
		height: "100%",
		latitude: lat,
		longitude: lng,
		zoom: zoom ? zoom : getZoom(),
	});

	useEffect(() => {
		const { lat, lng } = getCenter();
		setViewport({
			...viewport,
			latitude: lat,
			longitude: lng,
			zoom: zoom ? zoom : getZoom(),
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
              alt="marker"
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
                alt="marker"
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
