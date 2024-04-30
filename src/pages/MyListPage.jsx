import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import TableData from "../components/TableData";
import TabularFormData from "../components/TabularFormData";
import { useLoaderData } from "react-router-dom";

const MyListPage = () => {
  return (
    <div>
      <div>
        <TabularFormData />
      </div>
    </div>
  );
};

export default MyListPage;
