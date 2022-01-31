import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { LS_LOGIN_TOKEN } from './api';
import AppContainerPage from './Pages/AppContainerPage';
import AuthPage from './Pages/AuthPage';
import NotFoundPage from './Pages/NotFoundPage';


function App() {
  const token=localStorage.getItem(LS_LOGIN_TOKEN);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact >
          {token ? <Redirect to="/dashboard"/> : <Redirect to="/login"/> }
        </Route>
        <Route path={["/login","/signup"]}>
          <AuthPage></AuthPage>
        </Route>
        <Route path={["/dashboard" , "/recordings"]}>
          <AppContainerPage></AppContainerPage>
        </Route>
        <Route>
          <NotFoundPage></NotFoundPage>
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
