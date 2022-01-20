import {FC, memo} from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import DashboardPage from "./DashboardPage";
import RecordingsPage from "./RecordingsPage";
interface Props{
}
const AppContainerPage: FC<Props> = (props) =>{
return (
 <div className=" flex flex-row justify-between">
     <Switch>
     <Route path="/dashboard" exact>
          <DashboardPage></DashboardPage>
        </Route>
        <Route path="/recordings" exact>
          <RecordingsPage></RecordingsPage>
        </Route>
     </Switch>
     <Sidebar></Sidebar>





 </div>
);
};
AppContainerPage.defaultProps={
}
export default memo(AppContainerPage);