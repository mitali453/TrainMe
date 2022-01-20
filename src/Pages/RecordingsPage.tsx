import { FC, memo } from "react";
import { Link } from "react-router-dom";
interface Props {
}
const RecordingsPage: FC<Props> = (props) => {
    return (
        <div>This is recordings Page <br />
            Already <Link className="underline font-semibold text-blue-500" to={"/login"}>LOGIN</Link>
        </div>
    );
};
RecordingsPage.defaultProps = {
}
export default memo(RecordingsPage);