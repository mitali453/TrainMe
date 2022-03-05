import { FC, memo, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../api/auth";
import AppContext from "../AppContext";

interface Props {
}
const Sidebar: FC<Props> = (props) => {
    console.log("Sidebar rendering");
    const {user}= useContext(AppContext)

    useEffect(() => {
        console.log("Sidebar rendering first time");
    }, []);

    const history = useHistory();
    return (
        <div className=" h-screen bg-gray-400 w-80">
            <h1 className=" font-bold bg-red-500">Hello {user!.first_name}</h1>
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