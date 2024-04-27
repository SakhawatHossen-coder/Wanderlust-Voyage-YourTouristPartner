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
import { BiCoinStack, BiFlag, BiUser } from "react-icons/bi";
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
  } = loadedTourists;
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={image} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          <div className="flex gap-4 items-center">
            Tourist Spot
            <FaLocationPin />: {touristSpot}
          </div>
        </Typography>
        <Typography>
          <div className="flex gap-4 items-center">
            Travel Time
            <FaClock />
            {travelTime}
          </div>
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
};

export default ViewDetails;
