import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link, useLoaderData } from "react-router-dom";
import { FaClock, FaEye, FaUserFriends } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { BiCoinStack, BiFlag, BiUser } from "react-icons/bi";
const CountryCard = () => {
  // useEffect(() => {
  //   fetch(`http://localhost:5000/tourist/countries/`)
  //   .then(res=>res.json())
  //   .then(data=>{
  //      console.log(data)
  //   })

  // }, [third])

  const loadCont = useLoaderData();
  console.log(loadCont);

  return (
    <div>
      Helllo Country {loadCont.length}
      {/* 
      <Card className="w-full max-w-[48rem] flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            key={_id}
         
            alt={touristSpot}
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            <div className="flex gap-4 items-center">
              Tourist Spot
              <FaLocationPin />: {touristSpot}
            </div>
          </Typography>
          <Typography variant="h6" color="blue-gray" className="mb-2">
            <div className="flex gap-4 items-center">
              Travel Time
              <FaClock />
              {travelTime}
            </div>
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            <div className="flex gap-4 items-center">
              Average Cost
              <BiCoinStack />
              {averageCost}
            </div>
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            <div className="flex gap-4 items-center">
              Total Visitors Per Year
              <FaUserFriends />
              {totalVisitors}
            </div>
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            <div className="flex gap-4 items-center">
              Seasonality:
              {season}
            </div>
          </Typography>

          <Link
            to={`/tourist/${_id}`}
            className="flex justify-center items-center"
          >
            <Button
              variant="filled"
              color="yellow"
              className="flex items-center gap-2"
            >
              View Details
              <FaEye />
            </Button>
          </Link>
        </CardBody>
      </Card>
  */}
    </div>
  );
};

export default CountryCard;
