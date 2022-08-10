import React from 'react';
import { Transition, animated } from 'react-spring/renderprops';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import routes from '../routes.js';

const { AppHome, AppDevelopment, AppSupport, AppAbout } = routes;

const LayoutRouterAnimation = () => (
  <Router>
    <Route
      render={({ location, ...rest }) => (
        <main className='App-wrapper Router-animated'>
          <Route exact path='/' render={() => <AppHome />} />
          <Transition
            native
            items={location}
            keys={location.pathname.split('/')[1]}
            from={{ transform: 'translateY(100px)', opacity: 0 }}
            enter={{ transform: 'translateY(0px)', opacity: 1 }}
            leave={{ transform: 'translateY(100px)', opacity: 0 }}
          >
            {/* //from={{ opacity: 0, transform: 'scale3d(0.5,0.5,0.5)' }}
                // enter={{ opacity: 1, transform: 'scale3d(1,1,1)' }}
                // leave={{ opacity: 0, transform: 'scale3d(0.5,0.5,0.5)' }}> */}
            {(loc, state) => style =>
              (
                <Switch location={state === 'update' ? location : loc}>
                  <Route path='/development' render={props => GoPageDev({ ...props, style })} />
                  <Route path='/support' render={props => GoPageSup({ ...props, style })} />
                  <Route path='/about' render={props => GoPageAbout({ ...props, style })} />
                  {/* <Route
                    path="/consult"
                    render={props => GoPageCons({ ...props, style })}
                    /> */}

                  {/* <Route
                    render={props => GoPageNon({ ...props, style })}
                    /> */}
                </Switch>
              )}
          </Transition>
        </main>
      )}
    />
  </Router>
);

// const NavLink = props => (
//   <li className="navItem">
//     <Link {...props} style={{ cursor: 'pointer', color: 'inherit' }} />
//   </li>
// )

const GoPageDev = ({ style }) => (
  <animated.div className='App-route' style={{ ...style }}>
    <AppDevelopment />
  </animated.div>
);

const GoPageSup = ({ style }) => (
  <animated.div className='App-route' style={{ ...style }}>
    <AppSupport />
  </animated.div>
);

const GoPageAbout = ({ style }) => (
  <animated.div className='App-route' style={{ ...style }}>
    <AppAbout />
  </animated.div>
);

// const GoPageCons = ({ style }) => (
//   <animated.div
//     className="App-Route"
//     style={{ ...style }}>
//       <AppConsult />
//   </animated.div>
// )

// const GoPageNon = ({ style }) => (
//     <animated.div
//       className="App-route"
//       style={{ ...style, background: `#EBECF0` }}>
//           <div className="MainRouteItem">
//             <main className="App-wrapper No-match-page">
//                 <h1 className="Support-page-text">
//                     No match for
//                 </h1>
//             </main>
//           </div>
//     </animated.div>
// )

export default LayoutRouterAnimation;
