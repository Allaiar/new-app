import axios from "axios";

const getAnimals = async () => {
  const animals = await axios.get("http://localhost:8000/animals");

  return animals.data;
};
const createAnimals = async (animalsData) => {
  const animals = await axios.post(
    "http://localhost:8000/animals",
    animalsData
  );

  return animals.data;
};
const deleteAnimal = async (animalsId) => {
  const response = await axios.delete(
    `http://localhost:8000/animals/${animalsId}`
  );
  return response.data;
};

const editAnimal = async (animalsData) => {
  const response = await axios.put(
    `http://localhost:8000/animals/${animalsData.id}`,
    animalsData
  );
  return response.data;
};

const animalsService = {
  getAnimals,
  createAnimals,
  deleteAnimal,
  editAnimal,
};

export default animalsService;
