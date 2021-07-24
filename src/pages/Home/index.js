import React from "react";
import { Button } from "react-bootstrap";
import NavigationMenu from "../../components/Navigation";

const HomePage = () => {
  return (
    <div>
      <NavigationMenu />
      <Button>Click</Button>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
