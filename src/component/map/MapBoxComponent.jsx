import Map, { NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { mapSettings } from "./settings";

const MapboxComponent = () => {
  return (
    <div className="flex h-screen">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Map
          initialViewState={{
            longitude: 30.523333,
            latitude: 50.450001,
            zoom: 10,
          }}
          mapStyle={mapSettings.style}
          mapboxAccessToken={mapSettings.apiToken}
          style={{ width: "100%", height: "100%" }}
        >
          <NavigationControl position="top-left" />
        </Map>
      </div>
    </div>
  );
};

export default MapboxComponent;
