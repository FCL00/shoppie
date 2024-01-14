import GuestLayout from "@/Layouts/GuestLayout";
import React from "react";
import CartItem from "@/Components/CartItem/CartItem";
import CartSummary from "@/Components/CartItem/CartSummary";
import { ScrollArea } from "@/shadcn/ui/scroll-area";

const Cart = () => {
    return (
        <GuestLayout>
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-5">
                    <div className="cols-span-1 md:col-span-2">
                        <h1 className="text-2xl mb-4">Shopping Cart</h1>
                        <ScrollArea className="h-[500px] md:h-[750px]">
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </ScrollArea>
                    </div>
                    <div className="col-2 order-1 md:order-2">
                        <h1 className="text-2xl mb-4">Cart Summary</h1>
                        <CartSummary />
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
};

export default Cart;
