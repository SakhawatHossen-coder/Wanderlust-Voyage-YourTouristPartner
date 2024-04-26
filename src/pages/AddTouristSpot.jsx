import React from "react";
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

const AddTouristSpot = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      AddTouristSpot
      <div>
        <h1>Tourist spot</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          necessitatibus.
        </p>
      </div>
      {/* form */}
      <div>
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Register
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
                    {...register("image", { required: true })}
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
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span>This field is required</span>}
                </div>
              </div>
              <div className="main2 flex flex-col md:flex-row gap-6">
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Country Name
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="country_Name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    {...register("countryName", { required: true })}
                  />
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
            <select className="select select-info w-full max-w-xs">
              <option disabled selected>
                Seasonality
              </option>
              <option>Summer</option>
              <option>Winter</option>
              <option>Rainy</option>
              <option>Spring</option>
              <option>Autumn</option>
              <option>Late Autumn</option>
            </select>
            <div className="main3 my-5 flex flex-col md:flex-row gap-6">
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Travel Time
                </Typography>
                <Input
                  size="lg"
                  placeholder="travel_time "
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  {...register("travelTime ", { required: true })}
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
                  {...register("totalVisitors ", { required: true })}
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
                  {...register("userEmail", { required: true })}
                />
                {errors.userEmail && <span>This field is required</span>}
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
                  {...register("userName", { required: true })}
                />
                {errors.userName && <span>This field is required</span>}
              </div>
            </div>

            <div className="my-2">
              <Button size="lg" className="my-5" type="submit" value="ADD">
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
