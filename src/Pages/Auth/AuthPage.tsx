import {FC, memo} from "react";
import { Route, Switch } from "react-router-dom";
import { User } from "../../models/User";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

interface Props{
  onLogin:(user:User)=>void;
}

const AuthPage: FC<Props> = (props) =>{
return (
 <div>
    <Switch>
        <Route path="/login" exact>
          <LoginPage onLogin={props.onLogin}></LoginPage>
        </Route>
        <Route path="/signup" exact>
          <SignupPage></SignupPage>
        </Route>
    </Switch>
 </div>
);
};
AuthPage.defaultProps={
}
export default memo(AuthPage);