import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import Swal from "sweetalert2";

// export const AuthContext = createContext(null);

const auth = getAuth(app);
const Register = () => {
  const { createUser, updateUserProfile, logOut } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { email, password, photo, name } = data;
    console.log(data);
    const validatePassword = (password) => {
      return (
        password.length >= 6 && // Minimum length
        /[A-Z]/.test(password) && // Contains uppercase letter
        /[a-z]/.test(password)
      );
    };
    const isValidPassword = validatePassword(password);
    if (!isValidPassword) {
      // Display error message to the user
      Swal.fire({
        title: "Error! Invalid Password",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Ok",
      });

      return; // Prevent further execution if password is invalid
    }
    createUser(email, password).then((result) => {
      updateUserProfile(name, photo).then(() => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Successfully User Created ",
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate("/login");
      });
    });
  };
  return (
    <div>
      Register
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
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
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
                Photo URL
              </Typography>
              <Input
                size="lg"
                placeholder="photo url"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("photo", { required: true })}
              />
              {errors.photo && <span>This field is required</span>}
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

            <Button size="lg" className="mt-5" type="submit" value="Register">
              {/* <Input type="submit" value="" /> */}
              REgister
            </Button>

            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-blue-500">
                Log In
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Register;
