import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

export default function MoveTilt(props) {
  const { options, ...rest } = props;
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, options);
  }, [options]);

  return (
    <div ref={tiltRef} {...rest} className="Tilt-root">
      <div>{props.children}</div>
    </div>
  );
}
