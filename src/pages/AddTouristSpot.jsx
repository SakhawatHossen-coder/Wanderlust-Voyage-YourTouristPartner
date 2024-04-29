import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  Select,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProviders";
import FormAdd from "../components/FormAdd";

const AddTouristSpot = () => {
  const { user } = useContext(AuthContext);
  // console.log(user?.displayName);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const Email = user.email;
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
    } = data;
    const newData = { data };

    console.log(newData);
    fetch("http://localhost:5000/tourist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully Data Added ",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="md:w-1/2 w-full mx-10 my-8 md:mx-auto">
      <FormAdd />
      {/* form */}
      <div className="hidden">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            <h1>Tourist spot</h1>
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form
            className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg sm:w-96"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* <div className="mb-1 flex flex-col gap-6"> */}
            <div className="mb-1 flex flex-col  gap-6">
              <div className="main flex flex-col md:flex-row gap-6">
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Image
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Place URL"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    {...register("image", { required: false })}
                  />
                  {errors.name && <span>This field is required</span>}
                </div>
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Tourists Spot Name
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="tourists_spot_name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    {...register("touristSpot", { required: true })}
                  />
                  {errors.email && <span>This field is required</span>}
                </div>
              </div>
              <div className="main2 flex flex-col md:flex-row gap-6">
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Country Name
                  </Typography>
                  {/*
                  // <Input
                  //   size="lg"
                  //   placeholder="country_Name"
                  //   className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  //   labelProps={{
                  //     className: "before:content-none after:content-none",
                  //   }}
                  //   {...register("countryName", { required: true })}
                  // /> 
                  */}
                  <select
                    className="select select-info w-full max-w-xs"
                    {...register("season", { required: true })}
                  >
                    <option value="France">France</option>
                    <option value="Italy">Italy</option>
                    <option value="Spain">Spain</option>
                    <option value="England">England</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Switzerland">Switzerland</option>
                  </select>
                  {errors.countryName && <span>This field is required</span>}
                </div>
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Location
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="country_Name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    {...register("location", { required: true })}
                  />
                  {errors.location && <span>This field is required</span>}
                </div>
              </div>
              <div className="divider"></div>
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                short description
              </Typography>
              <Textarea
                variant="outlined"
                label="Short Description"
                {...register("description", { required: true })}
              />
              {errors.description && <span>This field is required</span>}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Average cost
              </Typography>
              <Input
                size="lg"
                placeholder="average_cost"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("averageCost", { required: true })}
              />
              {errors.averageCost && <span>This field is required</span>}
            </div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Seasonality
            </Typography>
            <select
              className="select select-info w-full max-w-xs"
              {...register("season", { required: true })}
            >
              <option disabled>Season</option>
              <option value="Summer">Summer</option>
              <option value="Winter">Winter</option>
              <option value="Rainy">Rainy</option>
              <option value="Spring">Spring</option>
              <option value="Autumn">Autumn</option>
              <option value="LateAutumn">Late Autumn</option>
            </select>
            <div className="divider"></div>

            <div className="main3 my-5 flex flex-col md:flex-row gap-6">
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Travel Time
                </Typography>
                <Input
                  size="lg"
                  placeholder="travel_time"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  {...register("travelTime", { required: true })}
                />
                {errors.travelTime && <span>This field is required</span>}
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Total Visitors Per Year
                </Typography>
                <Input
                  size="lg"
                  placeholder="totalVisitorsPerYear"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  {...register("totalVisitors", { required: true })}
                />
                {errors.totalvisitors && <span>This field is required</span>}
              </div>
            </div>
            <div className="main4 flex flex-col md:flex-row gap-6">
              <div>
                {" "}
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  User Email
                </Typography>
                <Input
                  size="lg"
                  placeholder="User Email"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  defaultValue={user?.email || "user has no email"}
                  {...register("userEmail", { required: true })}
                />
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  User Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="User Name"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  defaultValue={user?.displayName}
                  // {...register("userName", { required: false })}
                />
              </div>
            </div>
            <div className="divider"></div>

            <div className="my-2">
              <Button
                size="lg"
                className="my-5"
                color="green"
                type="submit"
                value="ADD"
              >
                ADD
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddTouristSpot;
