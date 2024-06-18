import React from "react";
import {
  Background,
  TopBezel,
  BottomBezel,
} from "../components/background/Background";
import CenterCharacter from "../components/center-character/CenterCharacter";
import bgImage from "../components/background/background-images/bg-img.png";
import "../components/center-character/center-character.css";
import "../components/intro-text/intro-text.css";
import IntroText from "../components/intro-text/IntroText";

const WIP = (props) => {
  return (
    <div {...props}>
      <Background
        source={require("../components/background/background-images/bg-img.png")}
      ></Background>
      <TopBezel
        source={require("../components/background/background-images/top-bezel.png")}
        className={"top-bezel"}
      ></TopBezel>
      <BottomBezel
        source={require("../components/background/background-images/bottom-bezel.png")}
        className={"bottom-bezel"}
      ></BottomBezel>
      <CenterCharacter />
      <IntroText></IntroText>
    </div>
  );
};

export default WIP;
