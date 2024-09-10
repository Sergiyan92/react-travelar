import { ClientFetch } from "../ClientFetch";

export const login = (body) => {
  return ClientFetch.post("/user/login", body);
};

export const registerUser = (body) => {
  return ClientFetch.post("/user/register", body);
};

export const logout = () => {
  return ClientFetch.get("/user/logout");
};

export const refresh = () => {
  return ClientFetch.get("/user/refresh");
};
