import axios from "axios";
import {BASE_URL, API_KEY_MOVIES } from "../config"


 export const TVShowAPI = {
    fetchPopulars: async () => {
      const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_MOVIES}`);
    //   console.log(response.data.results)
      return response.data.results;
      // return FAKE_POPULARS;
    },
  
    fetchRecommendations: async (tvShowId) => {
      const response = await axios.get(
        `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_MOVIES}`
      );
      return response.data.results;
      // return FAKE_RECOMMENDATIONS;
    },
  
    fetchByTitle: async (title) => {
      const response = await axios.get(
        `${BASE_URL}search/tv${API_KEY_MOVIES}&query=${title}`
      );
      return response.data.results;
    },
  };
  
  
  
  
  
  
  
  