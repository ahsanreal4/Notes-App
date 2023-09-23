import React from "react";
import { Input } from "semantic-ui-react";

const InputIconButton = ({
  action = "search",
  placeholder = "Search...",
  onChange,
}) => (
  <Input
    fluid
    action={{ icon: action }}
    placeholder={placeholder}
    onChange={(e) => onChange(e)}
  />
);

export default InputIconButton;
