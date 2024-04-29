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
            title: "Successfully Data Added",
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
  
    </div>
  );
};

export default AddTouristSpot;
