import React from "react";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
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
