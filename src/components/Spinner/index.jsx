import React from "react";
import classes from "./style.module.scss";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center py-40">
      <span className={classes.loader}>
      </span>
    </div>
  );
};

export default Spinner;
