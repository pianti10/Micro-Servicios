const axios = require("axios")
const films = require("./films.json");

module.exports = {
  list: async () => {
    const results = await axios.get("http://database:8004/Films")
    return results.data;
  },
};

create: async () => {
    throw Error("Hay un error en la BDD momento de crear un film")
}