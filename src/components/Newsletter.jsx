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
            <h1 className="text-5xl font-bold pop">Sign Up for Our Newsletter</h1>
            <p className="py-6 pop font-normal">
              Dreaming of a European adventure? Look no further! We're whisking
              you away on a journey through some of the continent's most
              captivating destinations. From the historic charm of Rome to the
              breathtaking beauty of the Swiss Alps, Europe offers something for
              everyone.
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
