import axios from "axios";

const getShoes = async () => {
  const shoes = await axios.get("http://localhost:8000/shoes");

  return shoes.data;
};

const shoesService = {
  getShoes,
};

export default shoesService;
