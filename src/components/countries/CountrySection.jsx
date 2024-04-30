import { Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CountrySectionCard from "./CountrySectionCard";

const CountrySection = () => {
  //   const loadedCountries = useLoaderData();
  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetch("https://server-side-ass10.vercel.app/countries")
      .then((res) => res.json())
      .then((data) => {
        setLists(data);
        // console.log(data);
      });
  }, []);

  return (
    <div className="w-full mx-auto">
      <Typography
        variant="h1"
        className="pop text-xl md:text-3xl font-bold text-center my-8"
      >
        Country Section
      </Typography>
      {/* {items.length} */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {lists.map((p, idx) => (
          <CountrySectionCard p={p} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default CountrySection;
