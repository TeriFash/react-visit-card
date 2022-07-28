import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

const MoveTilt = props => {
  const { options, ...rest } = props;
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, options);
  }, [options]);

  return (
    <div ref={tiltRef} {...rest} className='title-root'>
      <div>{props.children}</div>
    </div>
  );
};

export default MoveTilt;
