import { FC, memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchGroups } from "../../api/groups";

interface Props {
}
const DashboardPage: FC<Props> = (props) => {
    const [groups , setGroups] =  useState<any[]>();
    useEffect(()=>{
        fetchGroups({status:"all-groups" , query:"dome"}).then((groups)=>{
            setGroups(groups.data);
        })
    } ,[]);
    return (
        <div>This is dashboard Page <br />
            <div>
                {
                    groups?.map((e)=>{
                        return <div>{e?.name}</div>
                    })
                }
            </div>
            Go to <Link className="underline font-semibold text-blue-500" to={"/login"}>LOGIN</Link> <br />
            Go to  <Link className="underline font-semibold text-blue-500" to={"/recordings"}>Recordings</Link>
        </div>
    );
};
DashboardPage.defaultProps = {
}
export default memo(DashboardPage);