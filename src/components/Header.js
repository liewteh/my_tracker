import React from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
      {/* <Button color='blue' text='Hello' />
      <Button color='red' text='Hello' /> */}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

// CSS in React JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
