"use client";
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity((prevQuantity) => {
            if (prevQuantity < 20) {
                return prevQuantity + 1;
            }
            return prevQuantity;
        });
    }

    const decrement = () => {
        setQuantity((prevQuantity) => {
            if (prevQuantity > 1) {
                return prevQuantity - 1;
            }
            return prevQuantity;
        });
    }

    return (
        <div className="flex flex-col gap-1">
            <label className="font-medium">Quantity</label>
            <div className="flex items-center space-x-2">

                <button onClick={decrement}
                    disabled={quantity <= 1}
                    className="w-10 h-10 bg-red-600 rounded-md disabled:opacity-50" aria-label='Decrease Quantity'>-</button>

                <div className="w-12 h-10 flex items-center justify-center border rounded-md bg-white text-lg text-black font-medium">{quantity}</div>

                <button onClick={increment}
                    disabled={quantity >= 20}
                    className="w-10 h-10 bg-green-600 rounded-md disabled:opacity-50" aria-label='Increase Quantity'>+</button>
            </div>
        </div>
    )
}