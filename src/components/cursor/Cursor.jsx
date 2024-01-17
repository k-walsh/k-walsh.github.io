import React from "react";
import useMousePosition from "./useMousePosition";

function Cursor() {
  const { clientX, clientY } = useMousePosition();

  // let isTouchDevice = true;
  // try {
  //   // try to create touch event which would throw error on desktop
  //   document.createEvent("TouchEvent");
  // } catch (e) {
  //   isTouchDevice = false;
  // }

  return (
    <div
      id="mouseBee"
      style={{
        position: "absolute",
        left: clientX - 30,
        top: clientY - 30,
        transform: "translate(-100%, -100%)",
      }}
    >
      <img src="images/bee-yes.svg" alt="bee following mouse" />
    </div>
  );
}

export default Cursor;
