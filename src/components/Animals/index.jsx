import React, { useEffect } from "react";
import Spinner from "../Spinner";
import { getAnimals } from "../../redux/animals/animalsSlice";
import { useDispatch, useSelector } from "react-redux";
import AnimalsItem from "../AnimalsItem/index";
const Animals = () => {
  const dispatch = useDispatch();
  const { animals, isLoading } = useSelector((state) => state.animals);
  useEffect(() => {
    dispatch(getAnimals());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-9 py-14 px-14 container mx-auto max-w-7xl transition-all duration-500">
        {animals &&
          animals.map((el) => <AnimalsItem key={el.id} animals={el} />)}
      </div>
  );
};

export default Animals;
