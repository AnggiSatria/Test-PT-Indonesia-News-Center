import { Config2 } from "@/config/config";

export const REGISTER = (data) => {
  return () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await API.post(`/auth/register`, data, Config2);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  };
};
