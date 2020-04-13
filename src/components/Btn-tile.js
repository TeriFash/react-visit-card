import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

export default function BtnTile(props) {
  const tileRef = useRef();

  useEffect(() => {
    VanillaTilt.init(tileRef.current, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
    return () => tileRef.current.vanillaTilt.destroy();
  }, []);

  return (
    <div ref={tileRef} className="Tile-root">
      <div>{props.children}</div>
    </div>
  );
}
