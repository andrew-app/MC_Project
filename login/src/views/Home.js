import React, { Fragment } from "react";

import Green from "../components/Green";
import { useAuth0 } from "@auth0/auth0-react";
import Red from "../components/Red";


const Home = () => {
  const {isAuthenticated} = useAuth0();
  return (
  
  <Fragment>
    {isAuthenticated && (
      <Green/>
  )}
    {!isAuthenticated && (
      <Red/>
  )}
  </Fragment>
);
}

export default Home;
