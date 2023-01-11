import React from "react";
import instructions from "../../Data/instructions";
import Instruction from "../Instruction/Instruction";
import "./HowDoesItWork.css"
const HowDoesItWork = () => {
  return (
    <div className="how-does-it-work">
      {instructions.map((item) => {
        return <Instruction key={item.id} data={item} />;
      })}
    </div>
  );
};

export default HowDoesItWork;
