import React, { useContext } from "react";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProviders";

const FormAdd = () => {
  const { user } = useContext(AuthContext);
  const handleForm = (e) => {
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
    //     const userEmail = form.elements.userEmail.value;
    const userEmail = user.email;
    const userName = form.elements.userName.value;
    const season = form.elements.season.value;
    const formData = {
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
    };
    console.log(formData);
    fetch("http://localhost:5000/tourist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully Data Added form",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Tell us about the spot
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        By sharing your favorite spot, you'll help others discover its magic and
        contribute to a vibrant travel community!
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleForm}
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Image
          </Typography>
          <Input
            size="lg"
            name="photo"
            placeholder="photo URL"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Tourist Spot
          </Typography>
          <Input
            size="lg"
            name="touristSpot"
            placeholder="touristSpot"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Description
          </Typography>
          <Input
            size="lg"
            name="description"
            placeholder="description"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
            Country Name
          </Typography>
          <Input
            size="lg"
            name="countryName"
            placeholder="countryName"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          /> */}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Country Name
          </Typography>
          <select
            name="countryName"
            className="select select-info w-full max-w-xs"
          >
            <option value="France">France</option>
            <option value="Italy">Italy</option>
            <option value="Spain">Spain</option>
            <option value="England">England</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Switzerland">Switzerland</option>
          </select>

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Location
          </Typography>
          <Input
            size="lg"
            name="location"
            placeholder="location"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Average Cost
          </Typography>
          <Input
            size="lg"
            name="averageCost"
            placeholder="averageCost"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Travel Time
          </Typography>
          <Input
            size="lg"
            name="travelTime"
            placeholder="travelTime"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Total Visitors
          </Typography>
          <Input
            size="lg"
            name="totalVisitors"
            placeholder="travelTime"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Season
          </Typography>
          {/* <Input
            type="text"
            name="season"
            size="lg"
            placeholder="season"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          /> */}
          <select name="season" className="select select-info w-full max-w-xs">
            <option disabled>Season</option>
            <option value="Summer">Summer</option>
            <option value="Winter">Winter</option>
            <option value="Rainy">Rainy</option>
            <option value="Spring">Spring</option>
            <option value="Autumn">Autumn</option>
            <option value="LateAutumn">Late Autumn</option>
          </select>
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            User Email
          </Typography>
          <Input
            size="lg"
            name="userEmail"
            placeholder="user Email"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            defaultValue={user?.email}
            disabled
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            User Name
          </Typography>
          <Input
            size="lg"
            name="userName"
            placeholder="userName"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            disabled
            defaultValue={user?.displayName}
          />
        </div>

        <Button className="mt-6" type="submit" value="ADD" fullWidth>
          Add
        </Button>
      </form>
    </Card>
  );
};

export default FormAdd;

// / *  *  <select
//               className="select select-info w-full max-w-xs"
//               {...register("season", { required: true })}
//             >
//               <option disabled>Season</option>
//               <option value="Summer">Summer</option>
//               <option value="Winter">Winter</option>
//               <option value="Rainy">Rainy</option>
//               <option value="Spring">Spring</option>
//               <option value="Autumn">Autumn</option>
//               <option value="LateAutumn">Late Autumn</option>
//             </select> **/
