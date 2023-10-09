import React from "react";
import Login from "../login/Login";
import Register from "../register/register";

function Mainview({ active }) {
  switch (active) {
    case "login":
      return <Login />;
    case "register":
      return <Register />;
  }
}

export default Mainview;
