import { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { me } from './api/auth';
import { LS_AUTH_TOKEN } from './api/base';
import AppContainerLazy from "./pages/AppContainer/AppContainerLazy";
import AuthLazy from './pages/Auth/AuthLazy';
import NotFoundPage from './pages/NotFoundPage';
import { meFetchedAction, useAppSelector } from './store';

interface Props {
}

const App: FC<Props> = () => {
  const user= useAppSelector((state)=>state.me);
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  const dispatch=useDispatch();


  useEffect(()=>{
    if(!token){
      return;
    }
    me().then((u)=>dispatch(meFetchedAction(u)));
  },[]); //eslint-disable-line react-hooks/exhaustive-deps
  
  if(!user && token){
    return <div> LOADING....</div>
  }

  return (
    <>
    <Suspense fallback={<div className='text-red-500'>Loading...............</div>}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact >
            {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>
          <Route path={["/login", "/signup"]}>
            {user ? <Redirect to="/dashboard" /> : <AuthLazy  />}
          </Route>
          <Route path={["/dashboard", "/recordings"]}>
            {user ? <AppContainerLazy  /> : <Redirect to="/login" />}
          </Route>
          <Route>          
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
    </>
   );
}

export default App;
