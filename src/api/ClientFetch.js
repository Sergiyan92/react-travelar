import axios from "axios";

export const ClientFetch = axios.create({
  baseURL: "https://back-for-vue.b.goit.study/",
});
