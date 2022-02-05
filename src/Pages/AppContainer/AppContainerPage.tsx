import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { User } from "../../models/User";
import DashboardPage from "./DashboardPage";
import RecordingsPage from "./RecordingsPage";

interface Props {
  user:User;
}
const AppContainerPage: FC<Props> = (props) => {
  return (
    <div className=" flex flex-row">
      <Sidebar user={props.user}></Sidebar>
      <Switch>
        <Route path="/dashboard" exact>
          <DashboardPage></DashboardPage>
        </Route>
        <Route path="/recordings" exact>
          <RecordingsPage></RecordingsPage>
        </Route>
      </Switch>
    </div>
  );
};
AppContainerPage.defaultProps = {
}
export default memo(AppContainerPage);