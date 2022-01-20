import { useFormik } from "formik";
import { FC, memo, useState } from "react";
import * as yup from "yup";
import { Link } from "react-router-dom";

interface Props {
}
const SignupPage: FC<Props> = (props) => {
    const [check, setCheck]= useState(false);
    const { handleSubmit, getFieldProps, touched, errors } = useFormik({
		initialValues: {
			email: "",
			password: "",
            username:"",
		},
		validationSchema: yup.object().shape({
            username:yup.string().matches(/^[A-Za-z0-9_\-\. ]*$/, 'Enter Alphabets only').min(3, 'Too Short!').max(50, 'Too Long!')
            .required('This field is required'),
			email: yup.string().required("This field is required").matches(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/, "Enter a valid email").email(() => "Enter a valid email"),
			password: yup.string().required("This field is required").min(8, ({ min }) => `Atleast ${min} characters`)
		}),
		onSubmit: () => {
			console.log("helllo");

		},
	})
    return (
        <div className="">
            <div className="font-sans min-h-screen antialiased bg-gray-900 pt-24 pb-5">
                <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
                    <h1 className="font-bold text-center text-4xl text-yellow-500">Train<span className="text-blue-500">Me</span></h1>
                    <form action="#" onSubmit={handleSubmit}>
                        <div className="flex flex-col bg-white p-10 rounded-lg shadow space-y-0 ">
                            <h1 className="font-bold text-xl text-center pb-3">Sign Up Here</h1>
                           
                                <div className="flex flex-col space-y-1">
                                    <input 
                                    type="text" 
                                    id="username" 
                                    className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow" 
                                    placeholder="Username" 
                                    {...getFieldProps("username")}
                                    />
                                </div>
                                <div className="py-3 text-xs">     {touched.username && <span className=" text-red-500 text-xs ">{errors.username}</span>}</div>
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
                            <div className="py-3 text-xs">     {touched.email && <span className=" text-red-500 text-xs ">{errors.email}</span>}</div>

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
                            <div className="py-3">{touched.password && <div className=" text-red-500 text-xs ">{errors.password}</div>}</div>


                            <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
                                <button type="submit" className="bg-blue-500 flex mx-auto text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors">Sign Up</button>
                            </div>
                            <Link to="#" className="inline-block text-center text-xs hover:underline pt-1">Already have an account? <span className=" text-blue-500"><Link to={"/login"}> Login here </Link> </span></Link>
                        </div>
                    </form>
                    <div className="flex justify-center text-gray-500 text-sm">
                        <p>&copy;2021. All right reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
SignupPage.defaultProps = {
}
export default memo(SignupPage);