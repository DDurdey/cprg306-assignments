"use client";
import NewItem from "./NewItem";
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    quantity = 1;
    const increment () => {
        setQuantity((prevQuantity) => {
            if (prevQuantity < 20) {
                return prevQuantity + 1;
            }
            return prevQuantity;
        });
    }

    return (
        <div>
            <p>Quantity: {quantity}</p>
            <button onClick={increment}>Increase</button>
        </div>
    )