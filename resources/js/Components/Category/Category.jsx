import React from "react";
import CategoryBox from "./CategoryBox";
const Category = () => {
    return (
        <div className="mb-4 hidden md:block">
            <h1 className="text-2xl uppercase">Categories</h1>
            <div className="lg:flex gap-2 flex-wrap">
                <CategoryBox title={"Men's Apparel"} />
                <CategoryBox title={"Women's Apparel"} />
                <CategoryBox title={"Kid's Apparel"} />
                <CategoryBox title={"Babies"} />
                <CategoryBox title={"Gadgets"} />
                <CategoryBox title={"Home Entertainment"} />
                <CategoryBox title={"Home & Living"} />
                <CategoryBox title={"Groceries"} />
                <CategoryBox title={"Toys & Games"} />
                <CategoryBox title={"Personal Care"} />
                <CategoryBox title={"Sports"} />
                <CategoryBox title={"Gaming"} />
                <CategoryBox title={"Home Appliances"} />
            </div>
        </div>
    );
};

export default Category;
