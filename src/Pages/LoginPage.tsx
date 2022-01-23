import { useFormik } from "formik";
import { FC, memo } from "react";
import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";
import {ImSpinner10} from "react-icons/im";

interface Props {
}
const LoginPage: FC<Props> = (props) => {
    const history= useHistory();
    // const [check, setCheck] = useState(false);
    const { handleSubmit, getFieldProps, touched, errors,isSubmitting } = useFormik({
        initialValues: {
            password:"",
            email: "",
            
           
        },
        validationSchema: yup.object().shape({
            
            email: yup.string().required("This field is required").matches(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-z]+)$/, "Enter a valid email").email(() => "Enter a valid email"),
            password: yup.string().required("This field is required").min(8, ({ min }) => `Atleast ${min} characters`)
        }),
        onSubmit: (data,{setSubmitting}) => {

            console.log("data is : ",data);
            setTimeout(()=>{
                history.push("/dashboard");
            },3000)

        },
    })
    return (
        <div className="">
            <div className="font-sans min-h-screen antialiased bg-gray-900 pt-24 pb-5">
                <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
                    <h1 className="font-bold text-center text-4xl text-yellow-500">Train<span className="text-blue-500">Me</span></h1>
                    <form action="#" onSubmit={handleSubmit}>
                        <div className="flex flex-col bg-white p-10 rounded-lg shadow space-y-0 ">
                            <h1 className="font-bold text-xl text-center pb-3">Sign in to your account</h1>
                            <div className="flex flex-col ">
                                <input
                                    type="text"
                                    id="email"
                                    required
                                    className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                                    placeholder="Email"
                                    {...getFieldProps("email")}
                                />
                            </div>
                            <div className="h-6 text-xs">     {touched.email && <span className=" text-red-500 text-xs ">{errors.email}</span>}</div>

                            <div className="flex flex-col ">
                                <input
                                    type="password"
                                    id="password"
                                    className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                                    placeholder="Password"
                                    required
                                    {...getFieldProps("password")}

                                />
                            </div>
                            <div className="h-6 text-xs">{touched.password && <div className=" text-red-500 text-xs ">{errors.password}</div>}</div>

                            {/* <div className="relative">
                                <input type="checkbox" onClick={() => { setCheck(!check) }} name="remember" id="remember" className="inline-block align-middle" />
                                <label className="inline-block ml-2 align-middle" htmlFor="remember">Remember me</label>
                            </div> */}

                            <div className="flex justify-between sm:flex-row sm:justify-between items-center ">
                                <Link to="#" className="inline-block text-sm sm:text-base text-blue-500 hover:text-blue-700 hover:underline">Forgot your password?</Link>
                                <button type="submit" className="bg-blue-500 text-white font-bold px-2 sm:px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors">Log In</button>
                            </div>
                            <div className="flex justify-between">
                            {isSubmitting ? <ImSpinner10 className="animate-spin"></ImSpinner10>:<div className=" h-2"></div>}
                            <Link className="text-xs underline text-right pt-2 " to="/signup">If not! <span className="text-blue-500">Create Account</span> </Link>
                            </div>
                        </div>

                    </form>
                    <div className="flex justify-center text-gray-500 text-sm">
                        <p>&copy;2021. All right reserved.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};
LoginPage.defaultProps = {
}
export default memo(LoginPage);