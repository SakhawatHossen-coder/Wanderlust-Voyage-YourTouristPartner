import { Button, IconButton } from "@material-tailwind/react";
import React, { useContext } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProviders";

const SocilaLogin = () => {
  const { googleLogin, twitterLogin, githubLogin } = useContext(AuthContext);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location?.state || "/";
  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        Swal.fire({
          title: "Log In Successfully",
          text: "Do you want to continue",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate(from);
      }
    });
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <Button
        size="lg"
        variant="outlined"
        color="blue-gray"
        className="flex items-center gap-3"
        onClick={() => handleSocialLogin(googleLogin)}
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
        onClick={() => handleSocialLogin(githubLogin)}
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
        onClick={() => handleSocialLogin(twitterLogin)}
      >
        <IconButton>
          <FaTwitter size={24} />
        </IconButton>
        Continue with Twitter
      </Button>
    </div>
  );
};

export default SocilaLogin;
