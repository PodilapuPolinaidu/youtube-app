import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name = "Gaming"/>
      <Button name = "Songs" />
      <Button name = "Live"/>
      <Button name = "Scoccer"/>
      <Button name = "Cricket"/>
      <Button name = "Cooking"/>
      <Button name = "Valentines"/>
      <Button name = "Gaming"/>
    </div>
  );
};

export default ButtonList;
