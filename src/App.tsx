import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { LS_AUTH_TOKEN } from './api/base';
import AppContainerPage from './pages/AppContainer/AppContainerPage';
import AuthPage from './pages/Auth/AuthPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact >
          {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
        </Route>
        <Route path={["/login", "/signup"]}>
          {token ? <Redirect to="/dashboard" /> : <AuthPage />}
        </Route>
        <Route path={["/dashboard", "/recordings"]}>
          {token ? <AppContainerPage/>: <Redirect to="/login"/>}
        </Route>
        <Route>
          <NotFoundPage></NotFoundPage>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
