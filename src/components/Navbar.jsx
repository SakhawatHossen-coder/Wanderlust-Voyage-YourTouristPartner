import { Button } from "@material-tailwind/react";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="navbar justify-between mb-12">
        <div className="flex-">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="div">
          <NavLink to="/">
            <Button color="blue" className="btn">
              Home
            </Button>
          </NavLink>
          <NavLink to="/">
            <Button color="blue" className="btn">
              All Tourists Spot
            </Button>
          </NavLink>
          <NavLink to="/">
            <Button color="blue" className="btn">
              Add Tourists Spot
            </Button>
          </NavLink>
          <NavLink to="/">
            <Button color="blue" className="btn">
              My List
            </Button>
          </NavLink>
        </div>
        <div className="flex-none">
          <div className="mx-5">
            <NavLink to="/login">
              <Button color="green" className="btn mx-2">
                Login
              </Button>
            </NavLink>
            <NavLink to="/register">
              <Button color="green" className="btn">
                Register
              </Button>
            </NavLink>
          </div>
          <div className="dropdown dropdown-end hidden">
            <div
              tabIndex={0}
              role="Button"
              className="btn btn-ghost btn-circle"
            >
              {/* <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div> */}
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              {/* <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <Button className="btn btn-primary btn-block">View cart</Button>
          </div>
        </div> */}
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="Button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    user?.photoURL ||
                    "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
