import axios from "axios"

export async function getAllPokemon(url) {
  return new Promise((resolve) => {
    axios.get(url)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  });
};