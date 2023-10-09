import { API } from "@/config/api";
import { Config2 } from "@/config/config";

export const LOGIN = (data) => {
  return () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await API.post(`/auth/login/`, data, Config2);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };
};
