import React from 'react'
import { Input, Button } from "@material-tailwind/react";

const NewsletterForm = () => {
     const [email, setEmail] = React.useState("");
     const onChange = ({ target }) => setEmail(target.value);
  return (
    <div>
       <div className="relative flex justify-center items-center w-full max-w-[24rem]">
      <Input
        type="email"
        label="Email Address"
        value={email}
        onChange={onChange}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={email ? "gray" : "blue-gray"}
        disabled={!email}
        className="!absolute right-1 top-1 rounded"
      >
        SUBSCRIBE
      </Button>
    </div>
    </div>
  )
}

export default NewsletterForm

