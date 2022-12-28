import { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

function Maps({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState();
  // Transform the search results object into the latitude longitude

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // The latitude and longitude of the center of locations coordinates
  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: center.latitude,
    latitude: center.longitude,
    zoom: 11,
  });

  /* POPUP (should be under Marker)

  {selectedLocation.long === result.long ? (
            <Popup
            onClose={() => setSelectedLocation({})}
            closeOnClick={true}
            latitude={result.lat}
            longitude={result.long}
            >
              {result.title}
            </Popup>
          ):(
            false
          )}

          */

  return (
    <Map
      mapStyle="mapbox://styles/ghostphanatic/clc6uok1s001h14p9z1gv7n5u"
      mapboxAccessToken={process.env.mapbox_key}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
            >
              📌
            </p>
          </Marker>


          
        </div>
      ))}
    </Map>
  );
}

export default Maps;
