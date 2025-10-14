"use client";
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

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

    const handleSubmit = (e) => {
        e.preventDefault();

        const item = {
            name: name.trim(),
            quantity: Number(quantity),
            category,
        };

        console.log("New item:", item);
        alert(`Added Item:
            - Name: ${item.name}
            - Quantity: ${item.quantity}
            - Category: ${item.category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };
    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md w-full bg-white p-5 rounded-2xl border shadow-sm">
            <div className="flex flex-col gap-1">
                <label className="font-medium text-black">Item Name</label>
                <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Orange, 2 L"
                    className="w-full rounded-lg border-gray-300 text-black border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1"
                />
            </div>
            <div className="flex items-center space-x-2">

                <button onClick={decrement}
                    disabled={quantity <= 1}
                    className="w-10 h-10 bg-red-600 rounded-md disabled:opacity-50" aria-label='Decrease Quantity'>-</button>

                <div className="w-12 h-10 flex items-center justify-center border rounded-md bg-white text-lg text-black font-medium">{quantity}</div>

                <button onClick={increment}
                    disabled={quantity >= 20}
                    className="w-10 h-10 bg-green-600 rounded-md disabled:opacity-50" aria-label='Increase Quantity'>+</button>
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="category" className="font-medium">Category</label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full text-black rounded-lg border-gray-300 border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1"
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="meat">Meat</option>
                    <option value="bakery">Bakery</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">Add Item</button>
        </form>
    )
}