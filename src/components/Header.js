import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Our dream team PZ-26</h1>
    </header>
  );
};

const styles = {
  header: {
    padding: "2em",
    color: "#ff0000ff",
    textAlign: "center",
    fontWeight: "bold",
  },
};

export default Header;
