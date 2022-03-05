import {FC, memo} from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

interface Props{}

const AuthPage: FC<Props> = (props) =>{
return (
 <div>
    <Switch>
        <Route path="/login" exact>
          <LoginPage ></LoginPage>
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