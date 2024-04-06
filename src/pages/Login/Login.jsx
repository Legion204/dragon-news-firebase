import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";



const Login = () => {

    const {loginUser}=useContext(AuthContext)

    const handelLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email,password);
        loginUser(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 mx-auto">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Login</h1>
                    <p className="text-sm dark:text-gray-600">Login to access your account</p>
                </div>
                <form onSubmit={handelLogin} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Login</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-600">Do not have an account yet?
                            <Link to={'/register'}  className="hover:underline dark:text-violet-600">Register</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;