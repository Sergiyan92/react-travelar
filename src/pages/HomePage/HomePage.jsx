import { useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { Map, Marker, NavigationControl } from "react-map-gl";
import FavoritePlaces from "../../component/FavoritPlaces/FavoritPlaces";
import { mapSettings } from "../../component/map/settings";
import MarkerIcon from "../../component/icons/MarkerIcon.jsx";
import { getFavoritePlaces, addFavoritePlace } from "../../api/favorit-place";
import { useModal } from "../../custom-hook/useModal";
import CreateNewPlaceModal from "../../component/CreateNewPlaceModal/CreateNewPlaceModal";
import { useMutation } from "../../custom-hook/useMutation";
import UserInfo from "../../component/UserInfo/UserInfo.jsx";

const HomePage = () => {
  const [favoritePlaces, setFavoritePlaces] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [viewport, setViewport] = useState({
    longitude: 30.523333,
    latitude: 50.450001,
    zoom: 10,
  });
  const [mapMarkerLngLat, setMapMarkerLngLat] = useState(null);
  const { isOpen, closeModal, openModal } = useModal();
  const mapRef = useRef(null);

  const fetchFavoritePlaces = async () => {
    try {
      const data = await getFavoritePlaces();
      setFavoritePlaces(data);
    } catch (error) {
      console.error("Error fetching favorite places:", error);
    }
  };
  useEffect(() => {
    fetchFavoritePlaces();
  }, []);

  const {
    mutation: addPlace,
    isLoading: isAddingPlace,
    error,
  } = useMutation({
    mutationFn: (newData) => addFavoritePlace(newData),
    onSuccess: () => {
      closeModal();
      setMapMarkerLngLat(null);
      fetchFavoritePlaces(); // Trigger refetch after adding a place
    },
  });

  const handleAddPlace = async (formData) => {
    const body = {
      ...formData,
      coordinates: mapMarkerLngLat,
    };

    await addPlace(body);
  };

  const changeActiveId = (id) => {
    setActiveId(id);
  };

  const changePlace = (id) => {
    const { coordinates } = favoritePlaces.find((place) => place.id === id);
    changeActiveId(id);
    mapRef.current?.flyTo({ center: coordinates });
  };

  const handleMapClick = (event) => {
    const { lng, lat } = event.lngLat;
    setMapMarkerLngLat([lng, lat]);
  };

  return (
    <div className="flex h-screen">
      <div className="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
        <UserInfo />
        <FavoritePlaces
          items={favoritePlaces}
          activeId={activeId}
          onPlaceClicked={changePlace}
          openModal={openModal}
          onUpdated={fetchFavoritePlaces}
        />

        <CreateNewPlaceModal
          isOpen={isOpen}
          onClose={closeModal}
          isLoading={isAddingPlace}
          error={error}
          onSubmit={handleAddPlace}
        />
      </div>
      <div className="w-full h-full">
        <Map
          {...viewport}
          mapStyle={mapSettings.style}
          mapboxAccessToken={mapSettings.apiToken}
          style={{ width: "100%", height: "100%" }}
          onClick={handleMapClick}
          onMove={(evt) => setViewport(evt.viewState)}
          ref={mapRef}
        >
          <NavigationControl position="top-left" />

          {mapMarkerLngLat && (
            <Marker
              longitude={mapMarkerLngLat[0]}
              latitude={mapMarkerLngLat[1]}
            >
              <MarkerIcon className="h-8 w-8" isActive={true} />
            </Marker>
          )}

          {favoritePlaces?.map((place) => (
            <Marker
              key={place.id}
              longitude={place.coordinates[0]}
              latitude={place.coordinates[1]}
            >
              <button onClick={() => changeActiveId(place.id)}>
                <MarkerIcon className="h-8 w-8" />
              </button>
            </Marker>
          ))}
        </Map>
      </div>
    </div>
  );
};

export default HomePage;
