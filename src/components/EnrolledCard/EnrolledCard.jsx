import React from "react";
import CourseItem from "../CourseItem/CourseItem";
import "./EnrolledCard.css";

const EnrolledCard = ({ data }) => {
  return (
    <div className="enrolled-card">
      <div className="enrolled-card-top">
        <h2>{data?.name}</h2>
        <p>{data?.date}</p>
      </div>
      <p>
        Coursed Enrolled<span>({data?.courses?.length})</span>
      </p>
      <div className="enrolled-courses">
        {data?.courses.map((item, index) => {
          return <CourseItem course={item} key={index} />;
        })}
      </div>
      <p className="referral-amount">
        Referral Amount <span>${data?.referral}</span>
      </p>
    </div>
  );
};

export default EnrolledCard;
