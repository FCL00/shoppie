import React from "react";
import japan from "@/assets/japan.png";
const CategoryBox = ({ title, img, url, category }) => {
    return (
        <a href="" className="p-4 bg-[#252525] rounded-md hover:bg-[#202020]">
            <h1>{title}</h1>
        </a>
    );
};

export default CategoryBox;
