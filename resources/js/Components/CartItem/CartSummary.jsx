import React from "react";
import { ScrollArea } from "@/shadcn/ui/scroll-area";
const CartSummary = () => {
    return (
        <div className="space-y-3">
            <div className="bg-[#252525] p-5 rounded-md">
                <ScrollArea>
                    <p className="text-md flex justify-between mb-4">
                        Item
                        <span className="text-white">Unit price</span>
                    </p>
                    <p className="text-md flex justify-between mb-4">
                        Item Name
                        <span className="text-violet-500">$4.99</span>
                    </p>
                    <p className="text-md flex justify-between mb-4">
                        Item Name
                        <span className="text-violet-500">$4.99</span>
                    </p>
                    <p className="text-md flex justify-between mb-4">
                        Item Name
                        <span className="text-violet-500">$4.99</span>
                    </p>
                    <p className="text-md flex justify-between mb-4">
                        Item Name
                        <span className="text-violet-500">$4.99</span>
                    </p>

                    <p className="text-md flex justify-between mb-4">
                        Shipping Fee
                        <span className="text-violet-500">$50.00</span>
                    </p>
                    <p className="text-md flex justify-between">
                        Total
                        <span className="text-violet-500">$70.00</span>
                    </p>
                </ScrollArea>
            </div>
            <form className="text-end">
                <input type="hidden" />
                <button
                    type="submit"
                    className="bg-violet-500 w-full p-2 rounded-md"
                >
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default CartSummary;
