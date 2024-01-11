import React, { useState } from "react";
import MainLayout from "@/Layouts/MainLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
const Login = () => {
    const [hide, setHide] = useState(false);

    const toggleVisibility = () => {
        setHide((prevState) => !prevState);
    };

    return (
        <MainLayout>
            <div className="flex justify-center items-center">
                <form
                    className="w-[300px] md:w-[750px] flex flex-col bg-[#181818] p-5 rounded-md"
                    action=""
                >
                    <div className="flex flex-col mb-4">
                        <h1 className="text-2xl">Get Started</h1>
                        <p>Dont have an account?</p>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="username">Username</label>
                        <input
                            className="bg-[#252525] rounded-sm p-2 focus:outline-none border-[#252525] text-gray-400"
                            type="text"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="flex flex-col mb-4 ">
                        <label htmlFor="password">Password</label>
                        <div className="relative">
                            <input
                                className="bg-[#252525] rounded-sm p-2 focus:outline-none border-[#252525] text-gray-400 w-full"
                                type={hide ? "password" : "text"}
                                placeholder="Enter your password"
                                required
                                min={8}
                                max={25}
                            />
                            <FontAwesomeIcon
                                className="absolute right-0 -top-3 pt-6 px-3 text-gray-400"
                                icon={hide ? faEyeSlash : faEye}
                                onClick={toggleVisibility}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </MainLayout>
    );
};

export default Login;
