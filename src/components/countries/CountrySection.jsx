import { Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CountrySectionCard from "./CountrySectionCard";

const CountrySection = () => {
  //   const loadedCountries = useLoaderData();
  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/countries")
      .then((res) => res.json())
      .then((data) => {
        setLists(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <Typography variant="h2">Country Section</Typography>
      {/* {items.length} */}
      <div className="grid grid-cols-2 gap-5">
        {lists.map((p, idx) => (
          <CountrySectionCard p={p} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default CountrySection;
