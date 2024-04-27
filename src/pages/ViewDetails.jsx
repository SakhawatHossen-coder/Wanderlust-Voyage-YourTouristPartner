import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaClock, FaEye, FaUserFriends } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { BiCoinStack, BiFlag, BiLocationPlus, BiUser } from "react-icons/bi";
const ViewDetails = () => {
  const loadedTourists = useLoaderData();
  //   console.log(loadedTourists);
  const {
    image,
    touristSpot,
    averageCost,
    totalVisitors,
    travelTime,
    _id,
    location,
    countryName,
    season,
    userName
  } = loadedTourists;
  return (
    <>
        {/* <h1 className="text-black">{userName}: You have added this</h1> */}
      <Card className="mt-6 w-1/2 mx-auto shadow-xl">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={image} key={_id} alt="card-image" />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="blue-gray" className="mb-2">
            <div className="flex gap-2 items-center">
              Tourist Spot
              <span>
                <BiLocationPlus />
              </span>
              {touristSpot}
            </div>
            <br />
          </Typography>
          <Typography>
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
              Total Visitors
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
          <Typography color="gray" className="mb-8 font-normal">
            <div className="flex gap-4 items-center">
              Location:
              {location}
            </div>
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            <div className="flex gap-4 items-center">
              Country Name:
              {countryName}
            </div>
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          {/* <Button>Read More</Button> */}
        </CardFooter>
      </Card>
    </>
  );
};

export default ViewDetails;
