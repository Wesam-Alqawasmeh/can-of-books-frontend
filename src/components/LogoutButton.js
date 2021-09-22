import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      onClick={() => logout({ returnTo: window.location.origin })}
      variant="warning"
      style={{
        height: "50px",
        width: "150px",
        fontWeight: "bold",
        position:"relative",
        bottom:"75px",
        left:"35px"
      }}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
