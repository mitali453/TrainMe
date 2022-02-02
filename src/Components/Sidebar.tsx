import {FC, memo, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../api/auth";

interface Props{
}
const Sidebar: FC<Props> = (props) =>{
    console.log("Sidebar rendering");

    useEffect(()=>{
        console.log("Sidebar rendering first time");
    },[]);  
    
    const history= useHistory();
return (
 <div className=" h-screen bg-gray-400 w-80"> 
 <button onClick={()=>{
     logout();
     history.push("/login");
 }

 }>  LOGOUT</button>
 </div>
);
};
Sidebar.defaultProps={
}
export default memo(Sidebar);