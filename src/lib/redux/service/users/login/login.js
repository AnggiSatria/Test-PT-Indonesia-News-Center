import { API } from "@/config/api";
import { Config2 } from "@/config/config";
import axios from "axios";

export const LOGIN = (data) => {
  return () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(
          `https://api.kontenbase.com/query/api/v1/2c62b769-ebca-4bc6-ae86-ced93e0b96e1/auth/login`,
          data
          // Config2
        );
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };
};
