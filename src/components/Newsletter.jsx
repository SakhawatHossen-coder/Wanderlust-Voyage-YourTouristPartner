import React from "react";
import { Typography } from "@material-tailwind/react";
import NewsletterForm from "./NewsletterForm";
// import { Input, Button } from "@material-tailwind/react";
import newsletter from "../assets/newsletter.svg";
import { Fade } from "react-awesome-reveal";
const Newsletter = () => {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);
  return (
    <Fade>
      <div className="my-5 md:my-8">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={newsletter} className="max-w-sm w-72 md:w-full rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-2xl text-center md:text-5xl font-bold pop">
                Sign Up for Our Newsletter
              </h1>
              <p className="py-6 pop text-base font-normal text-center">
                Dreaming of a European adventure? Look no further! We're
                whisking you away on a journey through some of the continent's
                most captivating destinations. From the historic charm of Rome
                to the breathtaking beauty of the Swiss Alps, Europe offers
                something for everyone.
              </p>
              <div>
                <NewsletterForm />
              </div>
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Newsletter;
