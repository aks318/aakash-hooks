import React from "react";
import { useRef } from "react";
import { useState } from "react";

const useHalfClicked = () => {
  const [halfClicked, setHalfClicked] = useState();
  const divRef = useRef();

  const handlHalfClicked = (e) => {
    const divWidth = divRef.current.getBoundingClientRect().width;
    const halfDivWidth = divWidth / 2;
    const mouseXPos = e.nativeEvent.offsetX;
    const half = mouseXPos <= halfDivWidth;
    setHalfClicked(half);
  };

  const HalfWrapper = ({ children }) => {
    return (
      <div
        style={{ width: "fit-content" }}
        ref={divRef}
        onClick={handlHalfClicked}
      >
        {children}
      </div>
    );
  };

  return {
    halfClicked,
    HalfWrapper,
  };
};

export default useHalfClicked;
