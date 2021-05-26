import React, { Suspense } from 'react';
import LogIn from './Pages/Authentication/LogIn';

import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SignUp = React.lazy(() => import('./Pages/Authentication/SignUp'));
const SubSection = React.lazy(() => import('./components/Sections/SubSection'));
const Home = React.lazy(() => import('./Pages/Home/Home'));
const MainHeader = React.lazy(() => import('./components/Layout/MainHeader'));
const Orders = React.lazy(() => import('./components/Orders/Orders'));

function App() {
  const isLoggedIn = useSelector((state) => state.auth.userData.isLoggedIn);

  return (
    <Suspense fallback={<div>Loading...</div>}>

      {isLoggedIn && <MainHeader />}

      <Switch>
        <Route path='/' exact>
          {isLoggedIn && <Home />}
          {!isLoggedIn && <Redirect to='/login' />}
        </Route>
        <Route path='/home'>
          {isLoggedIn && <Home />}
          {!isLoggedIn && <Redirect to='/login' />}
        </Route>
        <Route path='/orders'>
          {isLoggedIn && <Orders />}
        </Route>
        <Route path='/login'>
          <LogIn />
        </Route>
        <Route path='/sign-up'>
          <SignUp />
        </Route>
        <Route path='/:linkUrl'>
          {isLoggedIn && <SubSection />}
          {!isLoggedIn && <Redirect to='/login' />}
        </Route>
        
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>

    </Suspense>
  );
}

export default App;