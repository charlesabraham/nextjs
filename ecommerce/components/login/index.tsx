





import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs";
import cookie from "cookie";



const LoginHtml = () => {

    const router = useRouter();
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
  
    const emailChangeHandler = (e:any) => {
      setUserEmail(e.target.value);
    };
  
    const passwordChangeHandler = (e:any) => {
      setUserPassword(e.target.value);
    };
  
    const formSubmitHandler = async (e:any) => {
      e.preventDefault();
  
      if(!userEmail || !userPassword) {
          console.error("Fill in the fields");
          return;
      }
  
      const hashedPassord = await bcrypt.hash(userPassword, 10);
  
      try {
        const response = await fetch(
          `http://localhost:4000/users?email=${userEmail}`
        );
  
        const userData = await response.json();
  
        if (userData.length === 0) {
          throw new Error("Invalid Credentials");
        }
  
        const hashedDBPassword = userData[0].password;
  
        const doesPasswordMatch = await bcrypt.compare(
          userPassword,
          hashedDBPassword
        );
  
        if (doesPasswordMatch) {
          console.log("success login");
        } else {
          throw new Error("Invalid Credentials");
        }
  
        const cookieTime = new Date(); //current time
        cookieTime.setHours(cookieTime.getHours() + 1); //current time + 1
  
        document.cookie = cookie.serialize("isLoggedIn", userEmail, {
          expires: cookieTime,
          path: "/",
          sameSite: "strict",
        });
  
        router.push("/");
      } catch (error) {
        console.log("error:", error);
      }
    };


    return (
        <div className="flex items-center min-h-screen bg-gray-100">
        <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
            <div className="flex flex-col md:flex-row">
                <div className="h-32 md:h-auto md:w-1/2">
                    <img className="object-cover w-full h-full" src="login.jpeg" alt="Login" />
                </div>
                <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                    <div className="w-full">
                        <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">Login to Your Account</h1>
                        <form onSubmit={formSubmitHandler}>
                            <div>
                                <label className="block text-sm">Email</label>
                                <input type="email"
                                value={userEmail}
                                onChange={emailChangeHandler}
                                className="block w-full mt-1 text-sm border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                                placeholder="name@example.com" />
                            </div>

                            <div className="mt-4">
                                <label className="block text-sm">Password</label>
                                <input type="password" 
                                value={userPassword}
                                onChange={passwordChangeHandler}
                                className="block w-full mt-1 text-sm border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                                placeholder="***************" />
                            </div>

                            <div className="mt-6">
                                <button type="submit" className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300">
                                    Log in
                                </button>
                            </div>
                        </form>

                        <p className="mt-4 text-xs text-center text-gray-600">
                            Don't have an account? <a href="/register" className="text-indigo-600 hover:underline">Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default LoginHtml;
