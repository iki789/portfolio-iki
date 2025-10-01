import React from "react";

interface CardProps {
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className={`px-8 py-8 bg-white rounded-lg shadow-md dark:bg-gray-800`}>
      {props.children}
    </div>
  );
};

export default Card;
