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
  const {
    image,
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
    _id,
  } = touristData;

  const handleUpdateForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.elements.photo.value;
    const touristSpot = form.elements.touristSpot.value;
    const description = form.elements.description.value;
    const countryName = form.elements.countryName.value;
    const location = form.elements.location.value;
    const averageCos = form.elements.averageCost.value;
    const averageCost = parseInt(averageCos);
    const travelTime = form.elements.travelTime.value;
    const totalVisitors = form.elements.totalVisitors.value;
    const season = form.elements.season.value;
    const updatedInfo = {
      image,
      touristSpot,
      description,
      countryName,
      location,
      averageCost,
      travelTime,
      totalVisitors,
      season,
    };
    //
    fetch(`http://localhost:5000/tourist/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Data Updated Successfully",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="my-5">
      <Card color="transparent" shadow={false}>
        <div className="w-1/2 mx-auto">
          <Typography variant="h4" color="blue-gray">
            Update Your Information:
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Update your preferred travel styles
          </Typography>
        </div>
        <form
          className="mt-8 mb-2 w-80 mx-auto max-w-screen-lg sm:w-96"
          onSubmit={handleUpdateForm}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Image
            </Typography>
            <Input
              size="lg"
              name="photo"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              defaultValue={image}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Tourist Spot
            </Typography>
            <Input
              size="lg"
              name="touristSpot"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              defaultValue={touristSpot}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Description
            </Typography>
            <Input
              size="lg"
              name="description"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              defaultValue={description}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Country Name
            </Typography>
            <Input
              size="lg"
              name="countryName"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              defaultValue={countryName}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Location
            </Typography>
            <Input
              size="lg"
              name="location"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              defaultValue={location}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Average Cost
            </Typography>
            <Input
              size="lg"
              type="number"
              name="averageCost"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              defaultValue={averageCost}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Travel Time
            </Typography>
            <Input
              size="lg"
              type="number"
              name="travelTime"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              defaultValue={travelTime}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Total Visitors
            </Typography>
            <Input
              size="lg"
              name="totalVisitors"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              defaultValue={totalVisitors}
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
              defaultValue={season}
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
