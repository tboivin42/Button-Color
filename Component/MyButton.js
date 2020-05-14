import React from "react";
import styled from "styled-components/native";

const MyButton = ({ colors, changeColor }) => {
  const handleColor = () => {
    const keysColors = Object.keys(colors);
    const randomColor =
      keysColors[Math.floor(Math.random() * keysColors.length)];
    changeColor(randomColor);
  };

  return (
    <ButtonContainer onPress={handleColor}>
      <Text>Click Me to change the color !</Text>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
  background-color: black;
`;

const Text = styled.Text`
  font-size: 15px;
  text-align: center;
  color: white;
`;

export default MyButton;
