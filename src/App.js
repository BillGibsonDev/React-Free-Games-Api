
// styles
import GlobalStyles from './GlobalStyles.js';

// components
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';

// pages
import LandingPage from './pages/LandingPage.js';
import AboutPage from './pages/AboutPage.js';
import GamePage from './pages/GamePage.js'
import WatchPage from './pages/WatchPage.js';


// router
import { Switch, Route, useLocation } from 'react-router-dom';

// animations
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <>
        <GlobalStyles />


        <Nav />
        <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/AboutPage" exact>
            <AboutPage />
          </Route>
          <Route path="/WatchPage" exact>
            <WatchPage />
          </Route>
          <Route path={"/games/:gameId"} exact>
						<GamePage />  
					</Route>
        </Switch>
        </AnimatePresence>
        <Footer />
    </>
  );
}


export default App;
