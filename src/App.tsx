import { FC, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { me } from './api/auth';
import { LS_AUTH_TOKEN } from './api/base';
import { User } from './models/User';
import AppContainerLazy from "./pages/AppContainer/AppContainerLazy";
import AuthLazy from './pages/Auth/AuthLazy';
import NotFoundPage from './pages/NotFoundPage';

interface Props {
}

const App: FC<Props> = () => {
  const [user, setUser] = useState<User>();
  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(()=>{
    if(!token){
      return;
    }
    me().then((u)=>setUser(u));
  })

  if(!user && token){
    return <div> LOADING....</div>
  }
  return (
    <Suspense fallback={<div className='text-red-500'>Loading...............</div>}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact >
            {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>
          <Route path={["/login", "/signup"]}>
            {user ? <Redirect to="/dashboard" /> : <AuthLazy onLogin={setUser} />}
          </Route>
          <Route path={["/dashboard", "/recordings"]}>
            {user ? <AppContainerLazy user={user!} /> : <Redirect to="/login" />}
          </Route>
          <Route>          
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
   );
}

export default App;
