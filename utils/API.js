import axios from "axios";

export default {
  // Gets all animals
  getAnimal: function() {
    return axios.get("/api/adopt");
  },
  // Gets the animal with the given id
  getAnimals: function(id) {
    return axios.get("/api/adopt/" + id);
  },
  // Saves a animals to the database
  saveAnimal: function(animalData) {
    return axios.post("/api/surrender", animalData);
  }
};
 