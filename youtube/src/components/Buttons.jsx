import React from "react";
import Button from "./Button";

const BtnList = [
  'All', 'Physics wallah', 'Unacademy', 'Vectors', 'Solid State',
  'Computer Science fundamental', 'Computer Networks', 'Operating System','Data Structures and Algorithm', 'ReactJS', 'Web Development','Football'
];

const Buttons = () => {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap space-x-2 py-2 hide-scrollbar">
      {BtnList.map((res, idx) => (
        <Button key={idx} name={res} />
      ))}
    </div>
  );
};

export default Buttons;