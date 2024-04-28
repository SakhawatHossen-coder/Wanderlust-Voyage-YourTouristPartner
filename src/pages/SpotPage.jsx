import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristCard from "../components/TouristCard";
import Dropdown from "../components/Dropdown";

const SpotPage = () => {
  const loadedTourists = useLoaderData();
  const [tourists, setTourists] = useState(loadedTourists);
  return (
    <div>
      <div className="flex justify-center items-center my-10">
        <Dropdown />
      </div>
      <div className="grid grid-cols-1 gap-4">
        {tourists.map((tourist, idx) => (
          <TouristCard tourist={tourist} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default SpotPage;
