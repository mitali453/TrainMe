import { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { LS_AUTH_TOKEN } from './api/base';
import AppContainerLazy from "./pages/AppContainer/AppContainerLazy";
import AuthLazy from './pages/Auth/AuthLazy';


import NotFoundPage from './pages/NotFoundPage';


function App() {
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  return (
    <Suspense fallback={<div className='text-red-500'>Loading...............</div>}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact >
          {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
        </Route>
        <Route path={["/login", "/signup"]}>
          {token ? <Redirect to="/dashboard" /> : <AuthLazy />}
        </Route>
        <Route path={["/dashboard", "/recordings"]}>
          {token ? <AppContainerLazy/>: <Redirect to="/login"/>}
        </Route>
        <Route>          <NotFoundPage></NotFoundPage>
        </Route>

      </Switch>
    </BrowserRouter>
    </Suspense>
  );
}

export default App;
