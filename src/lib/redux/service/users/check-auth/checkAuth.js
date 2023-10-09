import { API } from "@/config/api";
import { Config2 } from "@/config/config";

export const CHECKAUTH = (data) => {
  return () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await API.post(`/check-auth/`, data, Config2);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  };
};
