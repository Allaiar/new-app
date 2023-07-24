import axios from "axios";

const getTeam = async () => {
  const team = await axios.get("http://localhost:8000/team");

  return team.data;
};

const teamServices = {
  getTeam,
};

export default teamServices;
