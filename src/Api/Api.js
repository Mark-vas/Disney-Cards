import * as axios from "axios";

export const api = {
  getCards() {
    return axios.get("https://api.disneyapi.dev/characters").then((res) => {
      return res.data;
    });
  },
};
