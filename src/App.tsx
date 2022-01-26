import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AppContainerPage from './Pages/AppContainerPage';
import AuthPage from './Pages/AuthPage';
import NotFoundPage from './Pages/NotFoundPage';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact >
          <Redirect to="/login"></Redirect>
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
