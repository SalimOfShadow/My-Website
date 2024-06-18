import React from "react";
import "./background.css";

export function Background(props) {
  return (
    <div className={props.className}>
      <img
        src={props.source}
        alt="background"
        className="background-image"
        draggable="false"
      />
    </div>
  );
}

export function BottomBezel(props) {
  return (
    <div className={props.className}>
      <img
        src={props.source}
        alt="Bottom Bezel"
        className="bottom-bezel" // Huge margin in the div prevents button clicks
        draggable="false"
      />
    </div>
  );
}

export function TopBezel(props) {
  return (
    <div className={props.className}>
      <img
        src={props.source}
        alt="Top Bezel"
        className="top-bezel"
        draggable="false"
      />
    </div>
  );
}
