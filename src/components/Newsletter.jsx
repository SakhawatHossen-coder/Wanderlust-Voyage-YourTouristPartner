import React from "react";
import { Typography } from "@material-tailwind/react";
import NewsletterForm from "./NewsletterForm";
// import { Input, Button } from "@material-tailwind/react";
import newsletter from "../assets/newsletter.svg";
const Newsletter = () => {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);
  return (
    <div className="my-10">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={newsletter} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Sign Up for Our Newsletter</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div>
              <NewsletterForm />
            </div>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
