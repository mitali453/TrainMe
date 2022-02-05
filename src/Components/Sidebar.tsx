import { FC, memo, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../api/auth";
import { User } from "../models/User";

interface Props {
    user: User;
}
const Sidebar: FC<Props> = (props) => {
    console.log("Sidebar rendering");

    useEffect(() => {
        console.log("Sidebar rendering first time");
    }, []);

    const history = useHistory();
    return (
        <div className=" h-screen bg-gray-400 w-80">
            <h1 className=" font-bold bg-red-500">Hello {props.user.first_name}</h1>
            <button onClick={() => {
                logout();
                history.push("/login");
            }}>  LOGOUT
            </button>
        </div>
    );
};
Sidebar.defaultProps = {
}
export default memo(Sidebar);