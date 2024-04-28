import React from "react";
import { useLoaderData } from "react-router-dom";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
const UpdatePage = () => {
  const touristData = useLoaderData();

  const handleUpdateForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.elements.photo.value;
    const touristSpot = form.elements.touristSpot.value;
    const description = form.elements.description.value;
    const countryName = form.elements.countryName.value;
    const location = form.elements.location.value;
    const averageCost = form.elements.averageCost.value;
    const travelTime = form.elements.travelTime.value;
    const totalVisitors = form.elements.totalVisitors.value;
    const season = form.elements.season.value;
  };

  return (
    <div>
      UpdatePage
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleUpdateForm}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              image
            </Typography>
            <Input
              size="lg"
              name="photo"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              touristSpot
            </Typography>
            <Input
              size="lg"
              name="touristSpot"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              description
            </Typography>
            <Input
              size="lg"
              name="description"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              countryName
            </Typography>
            <Input
              size="lg"
              name="countryName"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              location
            </Typography>
            <Input
              size="lg"
              name="location"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              averageCost
            </Typography>
            <Input
              size="lg"
              name="averageCost"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              travelTime
            </Typography>
            <Input
              size="lg"
              name="travelTime"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              totalVisitors
            </Typography>
            <Input
              size="lg"
              name="totalVisitors"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Season
            </Typography>
            <Input
              type="text"
              name="season"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button className="mt-6" type="submit" value="Update" fullWidth>
            Update
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default UpdatePage;
