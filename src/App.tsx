import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AppContainerPage from './Pages/AppContainerPage';
import AuthPage from './Pages/AuthPage';
import DashboardPage from './Pages/DashboardPage';
import LoginPage from './Pages/LoginPage';
import NotFoundPage from './Pages/NotFoundPage';
import RecordingsPage from './Pages/RecordingsPage';
import SignupPage from './Pages/SignupPage';

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
