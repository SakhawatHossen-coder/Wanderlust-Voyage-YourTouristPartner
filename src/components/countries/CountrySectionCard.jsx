import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
const CountrySectionCard = ({ p }) => {
  const { _id, image, countryName, description } = p;
  return (
    <div>
      <Fade>
        <Link to={`/tourist/countries/${countryName}`}>
          <Card className="mt-6 w-96 mx-auto my-8">
            <CardHeader color="blue-gray" className="relative h-56">
              <img key={_id} src={image} alt={countryName} />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Country Name :{countryName}
              </Typography>
              <Typography>Description: {description}</Typography>
            </CardBody>
            {/* <CardFooter className="pt-0">
            <Link
              //   to={`/tourist/${tourist?._id}`}
              className="flex justify-center items-center"
            >
              <Button className="flex items-center gap-2">
                View Details
                <FaEye />
              </Button>
            </Link>
          </CardFooter> */}
          </Card>
        </Link>
      </Fade>
    </div>
  );
};

export default CountrySectionCard;

// YfhJDUYC7vtwdLoz8HcfTsclifmrIHLIg4nAxhOIOKmMmLjA4zyMqaRJzW1zk11I
// curl --location --request POST 'https://ap-south-1.aws.data.mongodb-api.com/app/data-dpsdecb/endpoint/data/v1/action/findOne' \
// --header 'Content-Type: application/json' \
// --header 'Access-Control-Request-Headers: *' \
// --header 'api-key: YfhJDUYC7vtwdLoz8HcfTsclifmrIHLIg4nAxhOIOKmMmLjA4zyMqaRJzW1zk11I' \
// --data-raw '{
//     "collection":"countries",
//     "database":"touristdb",
//     "dataSource":"Cluster0",
//     "projection": {"_id": 1}
// }'
