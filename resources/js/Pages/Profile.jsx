import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { usePage } from "@inertiajs/react";
import AuthLayout from "@/Layouts/AuthLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const Profile = () => {
    return (
        <AuthLayout>
            <div className="grid grid-cols-2 gap-5">
                <form className="mt-5 p-5 bg-[#252525] rounded-md" action="">
                    <div className="mb-4">
                        <label className="text-lg font-bold" htmlFor="">
                            Fullname
                        </label>
                        <input
                            className="w-full bg-[#181818] rounded-sm p-3 focus:outline-none border-[#181818] text-white text-sm"
                            type="text"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-lg font-bold" htmlFor="">
                            Address
                        </label>
                        <input
                            className="w-full bg-[#181818] rounded-sm p-3 focus:outline-none border-[#181818] text-white text-sm"
                            type="text"
                            placeholder="Enter your address"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-lg font-bold" htmlFor="">
                            Email
                        </label>
                        <input
                            className="w-full bg-[#181818] rounded-sm p-3 focus:outline-none border-[#181818] text-white text-sm"
                            type="text"
                            placeholder="Enter your email"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-[150px] p-3 bg-violet-600 hover:bg-violet-500 rounded-md"
                    >
                        Submit
                    </button>
                </form>
                <form className="mt-5 p-5 bg-[#252525] rounded-md" action="">
                    <div className="mb-4">
                        <label className="text-lg font-bold" htmlFor="">
                            Email
                        </label>
                        <input
                            className="w-full bg-[#181818] rounded-sm p-3 focus:outline-none border-[#181818] text-white text-sm"
                            type="text"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-lg font-bold" htmlFor="">
                            Current Password
                        </label>
                        <input
                            className="w-full bg-[#181818] rounded-sm p-3 focus:outline-none border-[#181818] text-white text-sm"
                            type="text"
                            placeholder="Enter your current password"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-lg" htmlFor="">
                            New Password
                        </label>
                        <input
                            className="w-full bg-[#181818] rounded-sm p-3 focus:outline-none border-[#181818] text-white text-sm"
                            type="text"
                            placeholder="Enter your new password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-[150px] p-3 bg-violet-600 hover:bg-violet-500 rounded-md"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </AuthLayout>
    );
};

export default Profile;
