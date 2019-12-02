import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
  return (
    <>
      <ImageToggleOnMouseOver
        primaryImg="/static/bw/mebw.jpg"
        secondaryImg="/static/color/me.jpg"
        alt=""
      />
      &nbsp; &nbsp; &nbsp;
      <ImageToggleOnMouseOver
        alt=""
        primaryImg="/static/bw/mebw.jpg"
        secondaryImg="/static/color/me.jpg"
      />
    </>
  );
};

export default ImageChangeOnMouseOver;
