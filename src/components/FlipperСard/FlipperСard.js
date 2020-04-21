import React, { useState, useRef } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
} from "react-spring";
import { devData } from "../../store/data";

// import './FlipperСard.scss'
const data = devData;

const FlipperСard = function() {
  const [open, set] = useState(false);

  setTimeout(() => {
    set((open) => (open = true));
  }, 6000);

  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: "20%", background: "#f57972" },
    to: { size: open ? "100%" : "20%", background: open ? "white" : "#ee6058" },
  });

  const transRef = useRef();
  const transitions = useTransition(open ? data : [], (item) => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
  });

  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <animated.div
      className="Container"
      style={{ ...rest, width: size, height: size }}
      onClick={() => set((open) => !open)}
    >
      {transitions.map(({ item, key, props }) => (
        <animated.div
          className="Item"
          key={key}
          style={{ ...props, background: item.css }}
        >
          {/* <div>{item.name}</div> */}
        </animated.div>
      ))}
    </animated.div>
  );
}

export default FlipperСard;