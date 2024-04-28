import React from "react";
import { Select, Option } from "@material-tailwind/react";

const Dropdown = () => {
  return (
    <div className="w-72">
      <Select
        label="Sort By"
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
      >
        <Option>Average Cost</Option>
      </Select>
    </div>
  );
};

export default Dropdown;
