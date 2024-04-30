import React, { useContext, useEffect, useState } from "react";

import { Card, Typography } from "@material-tailwind/react";
import { AuthContext } from "../providers/AuthProviders";

const TABLE_HEAD = [
  "Spot Name",
  "Country",
  "Travel Time",
  "Seasonality",
  "",
  "",
];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];
//

const TableData = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://server-side-ass10.vercel.app/tourist/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setItems(data);
      });
  }, [user]);
  //   const [list, setList] = useState([]);
  //   const { user } = useContext(AuthContext);
  //   useEffect(() => {
  //     console.log(user?.email);
  //     //   fetch(`https://server-side-ass10.vercel.app/tourist/email/${user?.email}`)
  //     fetch(`https://server-side-ass10.vercel.app/tourist/email/sakhawat32@gmail.com`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setList(data);
  //         console.log(data);
  //       });
  //   }, []);
  console.log(items);
  const AB = [items];
  const {
    touristSpot,
    description,
    countryName,
    location,
    averageCost,
    travelTime,
    totalVisitors,
    userEmail,
    userName,
    season,
  } = items;

  return (
    <div>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {AB?.map(({ touristSpot, countryName, travelTime }, index) => (
              <tr key={index} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {touristSpot}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {countryName}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {travelTime}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Edit
                  </Typography>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Delete
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default TableData;
