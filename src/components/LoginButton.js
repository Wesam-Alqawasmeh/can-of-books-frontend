import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div
      style={{
        width: "600px",
        height: "300",
        border: "5px solid brown",
        margin: "50px auto",
        borderRadius: "10px",
      }}
    >
      <h2 style={{margin:"20px auto", display:"block", textAlign:"center"}}>Login To reach your books</h2>

      <Button
        onClick={() => loginWithRedirect()}
        variant="warning"
        style={{
          display: "block",
          height: "50px",
          width: "150px",
          fontWeight: "bold",
          margin:" 100px auto"
        }}
      >
        Log In
      </Button>
    </div>
  );
};

export default LoginButton;
