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
import { Fade } from "react-awesome-reveal";
const CountryCard = () => {
  const loadCont = useLoaderData();
  //   console.log(loadCont);
  return (
    <div className="mx-auto my-10 flex flex-col justify-center items-center gap-5">
      <Typography variant="h2" className="text-lg md:text-3xl">Your Country Details Here</Typography>
      {loadCont.map((i, idx) => (
        <Fade>
          <Card className="w-full my-5 max-w-[48rem] flex-row" key={idx}>
            <CardBody>
              <Typography variant="paragraph" color="gray" className="mb-4 uppercase">
                <div className="flex gap-4 items-center">
                  Tourist Spot
                  <FaLocationPin />: {i.touristSpot}
                </div>
              </Typography>
              <Typography variant="h6" color="gray" className="mb-4 uppercase">
                <div className="flex gap-4 items-center">
                  Location : {i.location}
                </div>
              </Typography>
              <Typography variant="paragraph" color="gray" className="mb-2">
                Description
                <div className="flex gap-4 items-center">{i.description}</div>
              </Typography>

              <Typography color="gray" className="mb-4 font-normal">
                <div className="flex gap-4 items-center">
                  Average Cost
                  <BiCoinStack />
                  {i.averageCost}
                </div>
              </Typography>

              <Typography color="gray" className="mb-4 font-normal">
                <div className="flex gap-4 items-center">
                  Seasonality:
                  {i.season}
                </div>
              </Typography>

              <Link
                to={`/tourist/${i._id}`}
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
        </Fade>
      ))}
    </div>
  );
};

export default CountryCard;
