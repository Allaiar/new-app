import React, { useEffect } from "react";
import Spinner from "../../components/Spinner";
import { getTeam } from "../../redux/team/teamSlice";
import { useDispatch, useSelector } from "react-redux";
import TeamMembers from "../TeamMembers/index";
function Team() {
  const dispatch = useDispatch();
  const { team, isLoading } = useSelector((state) => state.team);
  console.log(team)
  useEffect(() => {
    dispatch(getTeam());
  }, [dispatch]);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="grid lg:grid-cols-2 py-20 px-20 transition-all duration-500">{team && team.map((el) => <TeamMembers key={el.id} team={el} />)}</div>
  );
}

export default Team;
