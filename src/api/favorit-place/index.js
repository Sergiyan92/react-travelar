import { ClientFetch } from "../ClientFetch";

const BASE_PLACES_URL = "/points";

export const getFavoritePlaces = () => {
  ClientFetch.get(BASE_PLACES_URL);
};

export const addFavoritePlace = (body) => {
  ClientFetch.post(BASE_PLACES_URL, body);
};

export const updateFavoritePlace = (body) => {
  ClientFetch.put(BASE_PLACES_URL, body);
};

export const deleteFavoritePlace = (body) => {
  ClientFetch.put(BASE_PLACES_URL, body);
};
