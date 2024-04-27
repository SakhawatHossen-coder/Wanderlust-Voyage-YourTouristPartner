import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaClock, FaEye, FaUserFriends } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { BiCoinStack, BiFlag, BiUser } from "react-icons/bi";

const TouristCard = ({ tourist }) => {
  const {
    image,
    touristSpot,
    averageCost,
    totalVisitors,
    travelTime,
    _id,
    season,
  } = tourist;
  const defImg =
    "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=600";
  return (
    <Card className="w-full max-w-[48rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          key={_id}
          src={
            tourist?.image
              ? image
              : "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
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

        <Link to={`/tourist/${_id}`} className="flex justify-center items-center">
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
  );
};

export default TouristCard;
