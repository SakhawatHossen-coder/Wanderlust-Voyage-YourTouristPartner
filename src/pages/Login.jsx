import React, { useContext } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProviders";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SocilaLogin from "../components/SocilaLogin";
const Login = () => {
  const { logIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const onSubmit = (data) => {
    const { email, password } = data;
    // console.log(data);
    logIn(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "Log In Successfully",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Ok",
          });
          // console.log(result.user);
          navigate(from);
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "Try Again! Invalid Credentials",
          text: "Do you want to continue",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <div className="my-5">
      <Card color="transparent" shadow={false}>
        <div className="md:w-1/2 mx-4 md:mx-auto">
          <Typography variant="h4" color="blue-gray">
            Log In
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Login to access your personalized travel dashboard, saved
            destinations, and travel plan ning tools.
          </Typography>
        </div>
        <form
          className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...register("password", { required: true })}
            />
            {errors.password && <span>This field is required</span>}
          </div>

          <Button
            size="lg"
            className="mt-5"
            type="submit"
            value="Log In"
            fullWidth
          >
            Log In
          </Button>
          <Typography color="gray" className="mt-4 mb-4 text-center font-normal">
            Don't have an account?{" "}
            <Link to="/register" className="font-medium text-blue-500">
              Register
            </Link>
          </Typography>
          {/*  */}
          <SocilaLogin />
        </form>
      </Card>
    </div>
  );
};

export default Login;
