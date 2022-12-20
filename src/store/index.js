import { defineStore } from "pinia";
import axios from "axios";
import SiteBuy from '../components/SiteBuy.vue';

export const useStore = defineStore("store", {
  state: () => ({
      movies: [],
      cart: new Map(),
  }),
  actions: {
    async getMovies() {
      let data = (
        await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
          params: {
            api_key: "ad891932e4907c23fc8a99002a4b5d3f",
            include_adult: "false",
          },
        })
      )
      for(let movie of data.data.results){
      this.movies.push({
        id: movie.id,
        poster: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
      });
    }
    },
  addToCart(id, data) {
    this.cart.set(id,data)
  }
  },
});
 