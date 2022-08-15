import React, { useState, useRef } from 'react';
import { useTransition, useSpring, useChain, config, animated } from 'react-spring';

// import './FlipperCard.scss'

const FlipperCard = props => {
  const [open, set] = useState(false);

  setTimeout(() => {
    set(open => (open = true));
  }, 6000);

  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: '20%', background: 'white' },
    to: { size: open ? '100%' : '20%', background: open ? 'white' : 'white' }
  });

  const transRef = useRef();
  const transitions = useTransition(open ? props.data : [], item => item.title, {
    ref: transRef,
    unique: true,
    trail: 200 / props.data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  });

  useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6]);

  return (
    <>
      {/* <h2>{props.title}</h2> */}
      <animated.div
        className='container'
        style={{ ...rest, width: size, height: 'auto' }}
        onClick={() => set(open => !open)}
      >
        {transitions.map(({ item, key, props }) => (
          <animated.div className='item flipper-card-item' key={key} style={{ ...props, background: item.css }}>
            <a
              title={item.title}
              href={item.url}
              className='flipper-card-item__link'
              {...rest}
              rel='noopener noreferrer'
              target='_blank'
            >
              <img alt={item.text} src={item.img} />
              <span>{item.title}</span>
            </a>
          </animated.div>
        ))}
      </animated.div>
    </>
  );
};

export default FlipperCard;
