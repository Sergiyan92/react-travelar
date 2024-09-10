import { useEffect, useRef, useState } from "react";
import FavoritePlaces from "../../component/FavoritPlaces/FavoritPlaces";
import { Map, Marker, NavigationControl } from "react-map-gl";
import { mapSettings } from "../../component/map/settings";
import MarkerIcon from "../../component/icons/MarkerIcon.svg";
import "mapbox-gl/dist/mapbox-gl.css";
import { getFavoritePlaces } from "../../api/favorit-place";

const HomePage = () => {
  const [favoritePlaces, setFavoritePlaces] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [viewport, setViewport] = useState({
    longitude: 30.523333,
    latitude: 50.450001,
    zoom: 10,
  });
  const mapRef = useRef(null);

  useEffect(() => {
    const fetchFavoritePlaces = async () => {
      try {
        const { data } = await getFavoritePlaces();
        console.log(data);
        setFavoritePlaces(data);
      } catch (error) {
        console.error("Error fetching favorite places:", error);
      }
    };

    fetchFavoritePlaces();
  }, []);

  const changeActiveId = (id) => {
    setActiveId(id);
  };

  const changePlace = (id) => {
    const { lngLat } = favoritePlaces.find((place) => place.id === id);
    console.log(lngLat);
    changeActiveId(id);
    mapRef.current?.flyTo({ center: lngLat });
  };
  return (
    <div className="flex h-screen">
      <div className="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
        <FavoritePlaces
          items={favoritePlaces}
          activeId={activeId}
          onPlaceClicked={changePlace}
        />
      </div>
      <div className="w-full h-full">
        <Map
          {...viewport}
          mapStyle={mapSettings.style}
          mapboxAccessToken={mapSettings.apiToken}
          style={{ width: "100%", height: "100%" }}
          onMove={(evt) => setViewport(evt.viewState)}
          ref={mapRef}
        >
          <NavigationControl position="top-left" />
          {favoritePlaces?.map((place) => (
            <Marker
              key={place.id}
              longitude={place.lngLat[0]}
              latitude={place.lngLat[1]}
            >
              <button onClick={() => changeActiveId(place.id)}>
                <img src={MarkerIcon} alt="" className="h-8 w-8" />
              </button>
            </Marker>
          ))}
        </Map>
      </div>
    </div>
  );
};

export default HomePage;
