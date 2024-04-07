"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";


const Header = () => {

    

    const isLoggedIn = document.cookie.includes("isLoggedIn");

    const router = useRouter();


    const signOutHandler = () => {
        document.cookie =
            "isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        //window.location.href = "/";
                router.push("/");

    };

    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="-ml-2 mr-2 flex items-center">
                            <a href="/" className="text-lg font-semibold text-gray-900">eCommerce Store</a>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <a href="/cart" className="text-gray-900 hover:text-gray-600">Cart</a>
                    </div>
                    <div className="flex items-center">
                        <a href="/products" className="text-gray-900 hover:text-gray-600">Products</a>
                    </div>

                    {isLoggedIn ? (

                        <div className="flex items-center">
                            <a href="/login" onClick={signOutHandler} className="text-gray-900 hover:text-gray-600">Sign Out</a>
                        </div>
                    ) : (<>
                        <div className="flex items-center">
                            <a href="/login" className="text-gray-900 hover:text-gray-600">Login</a>
                        </div>
                    </>)}
                </div>
            </div>
        </nav>
    );
};

export default Header;
