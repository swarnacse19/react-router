import React from "react";
import { useLoaderData } from "react-router";

function UserDetails() {
  const user = useLoaderData();

  const { website, name } = user;
  return (
    <div>
      <h1>This is user details</h1>
      <div style={{border: "2px solid red", 
        padding: "4px",
        borderRadius: "8px",
        backgroundColor: "white",
        color: "black"
      }}>
        <h5>{name}</h5>
        <p>{website}</p>
      </div>
    </div>
  );
}

export default UserDetails;
