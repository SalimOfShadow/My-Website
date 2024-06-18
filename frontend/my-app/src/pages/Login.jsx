import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/login/login.css";
import {
  Background,
  TopBezel,
  BottomBezel,
} from "../components/background/Background";
import LoginForm from "../components/login/LoginForm";

const Login = (props) => {
  return (
    <div>
      <LoginForm></LoginForm>
      <Background
        source={require("../components/background/background-images/bg-img.png")}
      ></Background>
      <TopBezel
        source={require("../components/background/background-images/top-bezel.png")}
      ></TopBezel>
      <BottomBezel
        source={require("../components/background/background-images/bottom-bezel.png")}
      ></BottomBezel>
    </div>
  );
};

export default Login;
