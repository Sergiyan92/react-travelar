import { ClientFetch } from "../ClientFetch";

const BASE_PLACES_URL = "/points";

export const getFavoritePlaces = () => {
  return ClientFetch.get(BASE_PLACES_URL).then(({ data }) =>
    data.map((place) => ({
      ...place,
      id: place._id,
    }))
  );
};

export const addFavoritePlace = (body) => {
  return ClientFetch.post(BASE_PLACES_URL, body);
};

export const updateFavoritePlace = (body) => {
  return ClientFetch.put(BASE_PLACES_URL, body);
};

export const deleteFavoritePlace = (id) => {
  return ClientFetch.delete(`${BASE_PLACES_URL}/${id}`);
};
