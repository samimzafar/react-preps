import { useEffect, useLayoutEffect } from "react";

const LayoutEffect = () => {
  //----useEffect runs Async screen is painted and never render before useLayoutEffect -----/////,
  useEffect(() => {
    console.log("First useEffect");
    setTimeout(() => {
      console.log("setTimeout useEffect");
    }, [3000]);
  }, []);

  //----useLayoutEffect runs Sync after a render but before screen is painted,so its LOG woulde be the first to be shown

  useLayoutEffect(() => {
    setTimeout(() => {
      console.log("setTimeout useLayoutEffect");
    }, [5000]);
    console.log("First useLayoutEffect");
  }, []);
  useEffect(() => {
    console.log("Second useEffect");
  }, []);

  return (
    <>
      <div>LayoutEffect</div>
      <button onClick={() => console.log("click")}>click</button>
    </>
  );
};

export default LayoutEffect;
