import React from "react";
import { Typewriter } from "react-simple-typewriter";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaCoins, FaEye, FaTimesCircle, FaUserFriends } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export function TouristSpots({ touristData }) {
  return (
    <>
      <div className="md:w-1/2 mx-auto container">
        <Typography variant="h3" className="mt-8 text-xl md:text-4xl">
          <Typewriter
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            words={[
              "Unveiling ",
              " the World's Wonders:",
              "Explore Top Tourist Spots!",
            ]}
          ></Typewriter>
        </Typography>
        <Typography variant="paragraph" className="my-2 text-base md:text-xl">
          Embark on a captivating journey across the globe with our curated list
          of must-visit tourist destinations! From historical marvels to
          breathtaking natural wonders, we've got something to ignite the
          wanderlust in everyone.
        </Typography>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {touristData.slice(0, 6).map((tourist, idx) => (
          <Fade>
            <Card className="w-96 mx-auto my-4" key={idx}>
              <CardHeader color="blue-gray" className="relative mt-2 h-56">
                <img
                  src={
                    tourist?.image ||
                    "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=600"
                  }
                  alt={tourist?.touristSpot}
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Tourist Spot: {tourist?.touristSpot}
                </Typography>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  <div className="flex gap-2 items-center">
                    Average Cost
                    <FaCoins />
                    {tourist?.averageCost}
                  </div>
                </Typography>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  <div className="flex gap-4 items-center">
                    Total Visitors Per Year
                    <FaUserFriends />
                    {tourist?.totalVisitors}
                  </div>
                </Typography>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  <div className="flex gap-4 items-center">
                    Travel Time
                    <FaClock />
                    {tourist?.travelTime}
                  </div>
                </Typography>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Season:
                  {tourist?.season}
                </Typography>
                <Typography>{tourist?.description}</Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Link
                  to={`/tourist/${tourist?._id}`}
                  className="flex justify-center items-center"
                >
                  <Button className="flex items-center gap-2">
                    View Details
                    <FaEye />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </Fade>
        ))}
      </div>
    </>
  );
}
export default TouristSpots;
