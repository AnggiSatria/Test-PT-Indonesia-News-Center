import { API, API2 } from "@/config/api";
import { Config2, Config4, apiKey } from "@/config/config";
import {
  FETCH_GAMES,
  FETCH_GAMES_DETAIL,
} from "@/lib/redux/action/games/games";

export const fetchGamesById = (payload) => {
  return {
    type: FETCH_GAMES_DETAIL,
    payload,
  };
};

export const fetchGames = (payload) => {
  return {
    type: FETCH_GAMES,
    payload,
  };
};

export const GAMESDETAILBYID = (id) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await API2.get(`/games/${id}?key=${apiKey}`, Config4);
        dispatch(fetchGamesById(response.data));
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
};

export const GAMES = (id) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await API2.get(
          `/games?key=7f2d052ea0fc4fc394e463de3f6903b0`,
          Config4
        );
        console.log(response);
        dispatch(fetchGames(response.data.results));
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
};
