import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristCard from "../components/TouristCard";
import Dropdown from "../components/Dropdown";
import { Option, Select, Spinner } from "@material-tailwind/react";

const SpotPage = () => {
  // const loadedTourists = useLoaderData();
  const [tourists, setTourists] = useState([]);
  //
  const [sortOrder, setSortOrder] = useState("asc");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/tourist"); // Assuming your API endpoint URL
        const data = await response.json();
        setTourists(data);
      } catch (error) {
        console.error("Error fetching tourist data:", error);
      }
    };

    fetchData(); // Fetch data on component mount

    // Re-fetch data when sort order changes
    return () => fetchData(); // Cleanup function to avoid memory leaks
  }, [sortOrder]);

  //
  const sortTourists = (data, order) => {
    return data.sort((a, b) => {
      if (order === "asc") {
        return a.averageCost - b.averageCost; // Sort ascending
      } else {
        return b.averageCost - a.averageCost; // Sort descending
      }
    });
  };
  const [isAscending, setIsAscending] = useState(true); // Track sort direction

  const handleClick = () => {
    setIsAscending((prevState) => !prevState);
    setSortOrder(isAscending ? "asc" : "desc"); // Update sort order state
  };
  return (
    <div>
      <div className="flex justify-center items-center my-10">
        {/* <Dropdown /> */}
        <div className="w-72">
          <Select
            label="Sort By"
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <button onClick={handleClick}>
              <Option>Sort by Average Cost {isAscending ? "⬆️" : "⬇️"} </Option>
            </button>
          </Select>
        </div>
        {/* <button onClick={handleClick}>
          Sort by Cost {isAscending ? "⬆️" : "⬇️"}
        </button> */}
      </div>
      <div className="grid grid-cols-1 gap-4">
        {sortTourists.length > 0 ? (
          sortTourists(tourists, sortOrder).map((tourist, idx) => (
            <TouristCard tourist={tourist} key={idx} />
          ))
        ) : (
          <Spinner className="w-full mx-auto" color="amber" />
        )}
      </div>
    </div>
  );
};

export default SpotPage;
