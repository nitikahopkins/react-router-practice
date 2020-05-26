import React from "react";

const Home = (props) => {
  props.setCurrentPage("Home");
  return (
    <div>
      <h1> Welcome!</h1>
    </div>
  );
};

export default Home;
