import { useEffect, useLayoutEffect } from "react";

const LayoutEffect = () => {
  //----useEffect runs Async screen is painted and never render before useLayoutEffect -----/////,
  useEffect(() => {
    console.log("First useEffect");
  }, []);

  //----useLayoutEffect runs Sync after a render but before screen is painted,so its LOG woulde be the first to be shown

  useLayoutEffect(() => {
    setTimeout(() => {
      console.log("setTimeout useLayoutEffect");
    }, [3000]);
    console.log("First useLayoutEffect");
  }, []);
  useEffect(() => {
    console.log("Second useEffect");
  }, []);

  return <div>LayoutEffect</div>;
};

export default LayoutEffect;
