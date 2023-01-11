import React from "react";
import { ReactSVG } from "react-svg";
import "./Instruction.css";
const Instruction = ({ data }) => {
  return (
    <div className="instruction">
      <ReactSVG src={data?.icon} />
      <div>
        <h5>{data?.title}</h5>
        <p>{data?.desc}</p>
      </div>
    </div>
  );
};

export default Instruction;
