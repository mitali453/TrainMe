import {FC, memo, useEffect} from "react";
interface Props{
}
const Sidebar: FC<Props> = (props) =>{
    console.log("Sidebar rendering");

    useEffect(()=>{
        console.log("Sidebar rendering first time");
    },[]);    
return (
 <div className=" h-screen bg-gray-400 w-80">This is Sidebar
 </div>
);
};
Sidebar.defaultProps={
}
export default memo(Sidebar);