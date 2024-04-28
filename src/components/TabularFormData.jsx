import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Button } from "@material-tailwind/react";

const TabularFormData = () => {
  //   console.log(items);
  //   const { touristSpot, countryName, travelTime, season } = items;
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/tourist/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //    console.log(typeof items);
        setItems(data);
      });
  }, [user]);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Tourist Spot Name</th>
              <th>Country Name</th>
              <th>Seasonality</th>
              <th>Travel Time</th>
            </tr>
          </thead>
          <tbody>
            {items?.map((item, idx) => (
              <tr key={idx}>
                <th className="hidden">1</th>
                <td>{item.touristSpot}</td>
                <td>{item.countryName}</td>
                <td>{item.season}</td>
                <td>{item.travelTime}</td>
                <td>
                  <Link to="/">
                    <Button
                      size="sm"
                      color="green"
                      className="flex flex-col justify-center items-center gap-2"
                    >
                      Update
                      <FaEdit />
                    </Button>
                  </Link>
                </td>
                <td>
                  <Button
                    size="sm"
                    color="red"
                    className="flex flex-col justify-center items-center gap-2"
                  >
                    Delete
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabularFormData;
