import React, { useState } from "react";
import styled from "styled-components/native";

import MyButton from "./Component/MyButton";

const colors = {
  default: "palevioletred",
  blue: "blue",
  red: "red",
  green: "green",
  yellow: "yellow",
};

export default function App() {
  const [color, setColor] = useState();

  return (
    <Container>
      <Text color={color}>Hi there!</Text>
      <MyButton changeColor={setColor} colors={colors} />
    </Container>
  );
}

const Container = styled.View`
  background-color: papayawhip;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 20px;
  color: ${(props) => colors[props.color]};
`;

Text.defaultProps = {
  color: "default",
};
