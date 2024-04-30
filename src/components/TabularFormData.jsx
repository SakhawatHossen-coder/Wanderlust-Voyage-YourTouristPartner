import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Button,Table } from "@material-tailwind/react";
import Swal from "sweetalert2";

const TabularFormData = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://server-side-ass10.vercel.app/tourist/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setItems(data);
      });
  }, [user]);

  //
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-side-ass10.vercel.app/tourist/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
              const remaining = items.filter((i) => i._id !== _id);
              setItems(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full ">
        {/* head */}
        <thead className="text-xs">
          <tr>
            <th className="p-2">Tourist Spot Name</th>
            <th className="p-2">Country Name</th>
            <th className="p-2">Seasonality</th>
            <th className="p-2">Travel Time</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item, idx) => (
            <tr key={idx}>
              <th className="hidden">1</th>
              <td className="p-2">{item.touristSpot}</td>
              <td className="p-2">{item.countryName}</td>
              <td className="p-2">{item.season}</td>
              <td className="p-2">{item.travelTime}</td>
              <td>
                <Link to={`/tourist/update/${item._id}`} className="text-xs">
                  <Button
                    size="sm"
                    color="green"
                    className="flex text-xs flex-col justify-center items-center gap-2"
                  >
                    Update
                    <FaEdit />
                  </Button>
                </Link>
              </td>
              <td>
                <Button
                  onClick={() => handleDelete(item._id)}
                  size="sm"
                  color="red"
                  className="flex text-xs flex-col justify-center items-center gap-2"
                >
                  Delete
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
          {/* row 1 */}
        </tbody>
      </table>
    </div>
  );
};

export default TabularFormData;
