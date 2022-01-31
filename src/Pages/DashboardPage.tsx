import { FC, memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchGroups } from "../api";
interface Props {
}
const DashboardPage: FC<Props> = (props) => {
    useEffect(()=>{
        fetchGroups({status:"all-groups"});
    } ,[]);
    return (
        <div>This is dashboard Page <br />
            Go to <Link className="underline font-semibold text-blue-500" to={"/login"}>LOGIN</Link> <br />
            Go to  <Link className="underline font-semibold text-blue-500" to={"/recordings"}>Recordings</Link>
        </div>
    );
};
DashboardPage.defaultProps = {
}
export default memo(DashboardPage);