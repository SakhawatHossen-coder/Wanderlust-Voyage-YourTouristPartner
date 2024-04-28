import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";

const MyListPage = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/tourist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, [user]);

  return <div>MyListPage</div>;
};

export default MyListPage;
