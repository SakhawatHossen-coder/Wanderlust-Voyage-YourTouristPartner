import React, { useContext } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProviders";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const Login = () => {
  const { logIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(data);
    logIn(email, password)
      .then((result) => {
        Swal.fire({
          title: "Log In Successfully",
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "Ok",
        });
        console.log(result.user);
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
    <div>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Log IN
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
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
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <Link to="/register" className="font-medium text-blue-500">
              Register
            </Link>
          </Typography>
          {/*  */}
          <div className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              variant="outlined"
              color="blue-gray"
              className="flex items-center gap-3"
            >
              <img
                src="https://docs.material-tailwind.com/icons/google.svg"
                alt="metamask"
                className="h-6 w-6"
              />
              Continue with Google
            </Button>
            <Button
              size="lg"
              variant="outlined"
              color="blue-gray"
              className="flex items-center gap-3"
            >
              <IconButton>
                <FaGithub size={24} />
              </IconButton>
              Continue with GitHub
            </Button>
            <Button
              size="lg"
              variant="outlined"
              color="blue-gray"
              className="flex items-center gap-3"
            >
              <IconButton>
                <FaTwitter size={24} />
              </IconButton>
              Continue with Twitter
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
