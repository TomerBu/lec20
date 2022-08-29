import React from "react";
import {
  InfinitySpin,
  Audio,
  BallTriangle,
  Hearts,
  Bars,
  CirclesWithBar,
  Blocks,
  ColorRing,
  Comment
} from "react-loader-spinner";

const LoaderSpinner = ({ width = 200, color = "#00BFFF" }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center my-5"
    >
      <InfinitySpin width={`${width}`} color={color} />
      <Audio width={`${width}`} color={color} />
      <Hearts width={`${width}`} color={color} />
      <BallTriangle width={`${width}`} color={color} />
      <Bars width={`${width}`} color={color} />
      <Blocks width={`${width}`} color={color} />
      <CirclesWithBar width={`${width}`} color={color} />
      <ColorRing width={`${width}`} color={color} />
      <Comment width={`${width}`} color={color} />
    </div>
  );
};

export default LoaderSpinner;
