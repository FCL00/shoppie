import React from "react";
import image from "@/assets/banner.png";

const BannerImage = () => {
    return (
        <div className="mb-4">
            <div className="rounded-lg bg-gray-800 relative">
                <div className="card-content  ">
                    <img
                        className="rounded-lg opacity-70 h-[300px] w-full object-cover"
                        src={image}
                        alt=""
                    />
                </div>
                <div className="card-body rounded-lg absolute bottom-10">
                    <div className="p-10">
                        <h1 className="text-white text-2xl  md:text-4xl font-bold">
                            Explore Our Collection and Shop Today
                        </h1>
                        <p className="hidden md:block text-white w-1/2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptas dolores vel veniam odio, quo amet
                            nisi iure modi laboriosam cum porro et voluptatem,
                        </p>
                        <button className="text-white bg-black p-2 rounded-md mt-1">
                            Learn more!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerImage;
