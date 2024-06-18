import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { verifyUser } from "../utils/verifyUser";
import { Background } from "../components/background/Background";
import { TopBezel } from "../components/background/Background";
import { BottomBezel } from "../components/background/Background";
import FormTitle from "../components/form-components/FormTitle";
import FormButton from "../components/form-components/FormButton";
const UserVerified = (props) => {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);
  const { id, token } = useParams();

  useEffect(() => {
    verifyUser(id, token).then((result) => {
      if (result) {
        setIsVerified(true);
        /*        setTimeout(() => {
          navigate("/login");
        }, 12500); */
      }
    });
  }, [id, token]);

  return (
    <div class="mainContainer">
      {isVerified ? (
        <FormTitle title="Your account has been verified, please login!" />
      ) : (
        <FormTitle title="Failed to verify the user" color="darkred" />
      )}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {isVerified && (
        <FormButton
          value="Return to login"
          onClick={() => {
            navigate("/login");
          }}
        ></FormButton>
      )}
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

export default UserVerified;
