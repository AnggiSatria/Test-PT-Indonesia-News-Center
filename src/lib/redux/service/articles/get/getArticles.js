import { Config } from "@/config/config";
import { ARTICLES } from "@/lib/redux/action/articles/article";
import axios from "axios";

export const fetchData = (payload) => {
  return {
    type: ARTICLES,
    payload,
  };
};

export const Articles = (config) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        const finalGet =
          config === "" || config === null || config === undefined
            ? `https://api.kontenbase.com/query/api/v1/2c62b769-ebca-4bc6-ae86-ced93e0b96e1/Articles`
            : `https://api.kontenbase.com/query/api/v1/2c62b769-ebca-4bc6-ae86-ced93e0b96e1/Articles?title=${config}`;

        const response = await axios.get(finalGet, Config);
        dispatch(fetchData(response));
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
};
