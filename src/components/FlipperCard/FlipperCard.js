import React, { useState } from 'react';
import { useTransition, useSpring, useChain, config, animated, useSpringRef } from '@react-spring/web';

// import './FlipperCard.scss';

const FlipperCard = ({ title, data }) => {
  const [open, set] = useState(false);

  setTimeout(() => {
    set(open => (open = true));
  }, 6000);

  const springApi = useSpringRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '20%', background: 'white' },
    to: {
      size: open ? '100%' : '20%',
      background: open ? 'white' : 'hotpink'
    }
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 }
  });

  useChain(open ? [springApi, transApi] : [transApi, springApi], [0, open ? 0.1 : 0.6]);

  return (
    <>
      <h2>{title}</h2>
      <div className='container-wrapper'>
        <animated.div
          style={{ ...rest, width: size, height: size }}
          className='container'
          onClick={() => set(open => !open)}
        >
          {transition(({ item, key, props }) => (
            // eslint-disable-next-line no-undef
            <animated.div className='item flipper-card-item' style={{ ...style, background: item.css }}>
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
      </div>
      {/* <animated.div
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
      </animated.div> */}
      <div className='container' style={{ width: '25%', height: 'auto' }} onClick={() => true}>
        {data.map((item, key) => (
          <div className='item flipper-card-item' key={key}>
            <a
              title={item.title}
              href={item.url}
              className='flipper-card-item__link'
              rel='noopener noreferrer'
              target='_blank'
            >
              <img alt={item.text} src={item.img} />
              <span>{item.title}</span>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default FlipperCard;
