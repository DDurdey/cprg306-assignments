"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;
        const newItem = {
            name: name.trim(),
            quantity: Number(quantity),
            category,
        };
        onAddItem(newItem);
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-[#0e0b1d] p-6 rounded-2xl shadow-[0_0_15px_#00ffff33] w-full max-w-md border border-cyan-600 backdrop-blur-md">

            <label className="block text-cyan-300 font-semibold mb-1 uppercase tracking-wider">
                Item Name
            </label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mb-4 px-3 py-2 rounded-lg bg-[#09071a] border border-cyan-700 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                placeholder="e.g., Orange, 2 L"
                required
            />

            <div className="flex items-center justify-between mb-4">
                <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-xl border-2 border-red-500 text-red-400 text-2xl font-bold
               hover:border-red-400 hover:text-red-300 hover:shadow-[0_0_12px_#ff1a1a]
               active:scale-95 transition-all duration-150 flex items-center justify-center
               bg-[#0b0816] select-none"
                >
                    −
                </button>

                <span className="text-2xl font-extrabold text-gray-100">{quantity}</span>

                <button
                    type="button"
                    onClick={() => setQuantity(Math.min(20, quantity + 1))}
                    className="w-12 h-12 rounded-xl border-2 border-emerald-500 text-emerald-400 text-2xl font-bold
               hover:border-emerald-400 hover:text-emerald-300 hover:shadow-[0_0_12px_#00ff99]
               active:scale-95 transition-all duration-150 flex items-center justify-center
               bg-[#0b0816] select-none"
                >
                    +
                </button>
            </div>

            <label className="block text-cyan-300 font-semibold mb-1 uppercase tracking-wider">
                Category
            </label>
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full mb-6 px-3 py-2 rounded-lg bg-[#09071a] border border-cyan-700 text-gray-100 focus:ring-2 focus:ring-cyan-400"
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

            <button
                type="submit"
                className="w-full py-3 mt-3 bg-gradient-to-r from-cyan-600 to-purple-700 hover:from-cyan-500 hover:to-purple-600 text-white font-bold rounded-xl tracking-wider transition-all duration-200 shadow-[0_0_12px_#00ffff66]">
                Add Item
            </button>
        </form>
    );
}