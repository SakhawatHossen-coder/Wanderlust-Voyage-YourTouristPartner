import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const TouristCard = ({ tourist }) => {
  const { image, touristSpot, averageCost, totalVisitors, travelTime } =
    tourist;
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
          src={
            tourist?.image
              ? image
              : "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          startups
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Lyft launching cross-platform service this week
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part
          of the story
        </Typography>
        <a href="#" className="inline-block">
          <Button
            variant="filled"
            color="yellow"
            className="flex items-center gap-2"
          >
            <Link to="/">
              View Details
            </Link>
              <FaEye />
          </Button>
        </a>
      </CardBody>
    </Card>
  );
};

export default TouristCard;
