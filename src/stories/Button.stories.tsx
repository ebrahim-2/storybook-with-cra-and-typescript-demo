import React from "react";
import { Button } from "../Button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
  component: Button,
};

export const test = () => (
  <Button onClick={action("onClick")}>Hello world</Button>
);
