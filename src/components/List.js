import React from "react";

const List = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
