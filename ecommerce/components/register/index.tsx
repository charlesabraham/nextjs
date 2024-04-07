"use client";

import { FormEvent, useState } from "react";
import bcrypt from "bcryptjs";
import Link from "next/link";

const RegisterHtml = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [confirmUserPassword, setConfirmUserPassword] = useState("");
    const [passwordValidator, setPasswordValidator] = useState(1);
    const [isUserRegistered, setIsUserRegistered] = useState(false);

    const emailChangeHandler = (e: FormEvent<HTMLLabelElement>) => {
        console.log("fdf");
        setUserEmail(e.target.value);
        console.log(e.target.value);
    };

    const passwordChangeHandler = (e: any) => {
        setUserPassword(e.target.value);
    };

    const confrimPasswordChangeHandler = (e: any) => {
        setConfirmUserPassword(e.target.value);
    };

    const formSubmitHandler = async (e: any) => {
        e.preventDefault();

        if (!userEmail || !userPassword || !confirmUserPassword) {
            console.error("Enter all the fields");
            return;
        }

        if (userPassword === confirmUserPassword) {
            setPasswordValidator(1);

            const hashedPassword = await bcrypt.hash(userPassword, 10);

            const userIDTimeStamp = new Date().getTime();

            const completeData = {
                id: userIDTimeStamp.toString(),
                email: userEmail,
                password: hashedPassword,
            };

            try {
                console.log("charles");
                const response = await fetch("http://localhost:4000/users", {
                    method: "POST",
                    header: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(completeData),
                });

                const data = await response.json();

                if (response.ok) {
                    console.log("Registration Success");
                } else {
                    console.error("Registration Fail");
                }
            } catch (error) {
                console.error("catch:", error);
            }

            setUserEmail("");
            setUserPassword("");
            setConfirmUserPassword("");
            setIsUserRegistered(true);
        } else {
            setPasswordValidator(0);
        }
    };


    return (
        <div className="flex items-center min-h-screen bg-gray-100">
            <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
                <div className="flex flex-col md:flex-row">
                    <div className="h-32 md:h-auto md:w-1/2">
                        <img className="object-cover w-full h-full" src="register2.jpg" alt="Register" />
                    </div>
                    <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                        <div className="w-full">
                            <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">Create Your Account</h1>
                            <form onSubmit={formSubmitHandler}>

                                {isUserRegistered && (
                                    <h2 className=" mb-2 rounded px-2 py-3 bg-red-400">
                                        Successfully Registered,{" "}
                                        <Link className="text-orange-500" href="/login">
                                            Login
                                        </Link>{" "}
                                        here!
                                    </h2>
                                )}

                                <div className="mt-4">
                                    <label className="block text-sm"
                                
                                        onChange={(e) => {
                                            emailChangeHandler(e);
                                        }}
                                    >Email</label>
                                    <input type="email" className="block w-full mt-1 text-sm border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="name@example.com" />
                                </div>

                                <div className="mt-4">
                                    <label className="block text-sm">Password</label>
                                    <input type="password" value={userPassword}
                                        onChange={passwordChangeHandler}
                                        className="block w-full mt-1 text-sm border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="***************" />
                                </div>

                                <div className="mt-4">
                                    <label className="block text-sm">Confirm Password</label>
                                    <input type="password"
                                        value={confirmUserPassword}
                                        onChange={confrimPasswordChangeHandler}
                                        className="block w-full mt-1 text-sm border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="***************" />
                                </div>

                                {!passwordValidator && (
                                    <h2 className=" mb-2 rounded px-2 bg-red-700">
                                        Passwords do not Match!
                                    </h2>
                                )}

                                <div className="mt-6">
                                    <button type="submit" className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300">
                                        Register
                                    </button>
                                </div>
                            </form>

                            <p className="mt-4 text-xs text-center text-gray-600">
                                Already have an account? <a href="/login" className="text-indigo-600 hover:underline">Login here</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterHtml;
