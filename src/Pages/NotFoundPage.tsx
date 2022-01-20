import {FC, memo} from "react";
interface Props{
}
const NotFoundPage: FC<Props> = (props) =>{
return (
 <div className=" bg-red-600 text-white text-center"> Page Not Found</div>
);
};
NotFoundPage.defaultProps={
}
export default memo(NotFoundPage);