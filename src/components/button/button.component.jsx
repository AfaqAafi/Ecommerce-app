import React from "react";

const Button_Type_Classes = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType }) => {
  return (
    <>
      <button className={`button-container ${Button_Type_Classes[buttonType]}`}>
        {children}
      </button>
    </>
  );
};

export default Button;
