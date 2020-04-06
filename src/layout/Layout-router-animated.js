import React from 'react'
import { Transition, animated } from 'react-spring/renderprops'
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import AppHome from '../pages/App-home';
import AppDevelopment from '../pages/App-development';
import AppSupport from '../pages/App-support';
import AppConsult from '../pages/App-consult';

const LayoutRouterAnimation = () => (
  <Router>
    <Route
      render={({ location, ...rest }) => (
        <main className="App-wrapper Router-animated">
            <Route exact path="/" render={() => <AppHome />} />
            <Transition
                native
                items={location}
                keys={location.pathname.split('/')[1]}
                // from={{ transform: 'translateY(100px)', opacity: 0 }}
                // enter={{ transform: 'translateY(0px)', opacity: 1 }}
                // leave={{ transform: 'translateY(100px)', opacity: 0 }}
                from={{ opacity: 0, transform: 'scale3d(0.5,0.5,0.5)' }}
                enter={{ opacity: 1, transform: 'scale3d(1,1,1)' }}
                leave={{ opacity: 0, transform: 'scale3d(0.5,0.5,0.5)' }}>
                {(loc, state) => style => (
                <Switch location={state === 'update' ? location : loc}>
                    <Route
                    path="/development"
                    render={props => GoPageDev({ ...props, style })}
                    />
                    <Route
                    path="/support"
                    render={props => GoPageSup({ ...props, style })}
                    />
                    <Route
                    path="/consult"
                    render={props => GoPageCons({ ...props, style })}
                    />
                
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
)

// const NavLink = props => (
//   <li className="navItem">
//     <Link {...props} style={{ cursor: 'pointer', color: 'inherit' }} />
//   </li>
// )

const GoPageDev = ({ style }) => (
  <animated.div
    className="MainRoute"
    style={{ ...style, background: `#EBECF0` }}>
        
            <AppDevelopment />
        
  </animated.div>
)

const GoPageSup = ({ style }) => (
    <animated.div
      className="MainRoute"
      style={{ ...style, background: `#EBECF0` }}>
          
              <AppSupport />
          
    </animated.div>
)

const GoPageCons = ({ style }) => (
    <animated.div
      className="MainRoute"
      style={{ ...style, background: `#EBECF0` }}>
          
              <AppConsult />
          
    </animated.div>
)

// const GoPageNon = ({ style }) => (
//     <animated.div
//       className="MainRoute"
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


export default LayoutRouterAnimation