import { useNavigate } from "react-router-dom";
import { ClientFetch } from "../ClientFetch";

export const TOKEN_KEY = "token";

class AuthService {
  #token = null;

  isLoggedIn() {
    return Boolean(this.#token);
  }

  getToken() {
    return this.#token;
  }

  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
    this.#token = token;
  }

  clearToken() {
    this.#token = null;
    localStorage.removeItem(TOKEN_KEY);
  }

  async login(body) {
    const { data } = await ClientFetch.post("/user/login", body);
    const { accessToken } = data;

    this.setToken(accessToken);
  }

  async registerUser(body) {
    const { data } = await ClientFetch.post("/user/register", body);
    const { accessToken } = data;

    this.setToken(accessToken);
  }

  async logout() {
    await ClientFetch.get("/user/logout");

    this.clearToken();
  }

  async refresh() {
    const { data } = await ClientFetch.get("/user/refresh");
    const { accessToken } = data;

    this.setToken(accessToken);
  }
}

export const authService = new AuthService();

ClientFetch.interceptors.request.use((request) => {
  const token = authService.getToken();

  if (token) {
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return request;
});

ClientFetch.interceptors.response.use(
  (response) => response,
  async (error) => {
    const errorCode = error.response?.status;

    if (errorCode === 401 && authService.getToken()) {
      try {
        const newToken = await authService.refresh();
        error.config.headers["Authorization"] = `Bearer ${newToken}`;
        return ClientFetch.request(error.config);
      } catch (e) {
        authService.clearToken();
        const navigate = useNavigate();
        navigate("/auth/login");
        return Promise.reject(e);
      }
    }

    return Promise.reject(error);
  }
);
