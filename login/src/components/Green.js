import React from "react";

import success from "../assets/success.svg";

const Green = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={success} alt="React logo" width="120" />
    <h1 className="mb-4">Success!</h1>

    <p className="lead">
      Successfully Authenticated.
    </p>
  </div>
);

export default Green;