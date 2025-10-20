"use client";
import { useState } from 'react';
import Item from './item';
import ItemData from './items.json';

export default function ItemList({ }) {
    const [sortBy, setSortBy] = useState("name");
    const [grouped, setGrouped] = useState(false);

    const sortedItems = [...ItemData].sort((a, b) => {
        const valA = (a[sortBy] ?? "").toString();
        const valB = (b[sortBy] ?? "").toString();
        return valA.localeCompare(valB);
    });

    const itemsByCategory = ItemData.slice()
        .sort((a, b) => a.name.localeCompare(b.name))
        .reduce((acc, item) => {
            const key = item.category || "uncategorized";
            (acc[key] ||= []).push(item);
            return acc;
        }, {});

    const categoryNames = Object.keys(itemsByCategory).sort((a, b) => a.localeCompare(b));

    const buttonBase = "flex-1 py-2 rounded-lg font-medium border transition-colors";
    const activeClass = "bg-green-600 text-white border-green-700";
    const inactiveClass = "bg-gray-200 text-gray-800 border-gray-300 hover:bg-gray-300";

    return (
        <div className="w-full max-w-md mx-auto bg-white rounded-2xl border shadow-sm p-5 space-y-4">
            <h1 className="text-2xl font-bold text-center text-black">Item List</h1>

            <div className="flex gap-2">
                <button
                    onClick={() => {
                        setGrouped(false);
                        setSortBy("name");
                    }}
                    className={`${buttonBase} ${!grouped && sortBy === "name" ? activeClass : inactiveClass}`}
                >Sort by Name</button>

                <button
                    onClick={() => {
                        setGrouped(false);
                        setSortBy("category");
                    }}
                    className={`${buttonBase} ${!grouped && sortBy === "category" ? activeClass : inactiveClass}`}
                >Sort by Category</button>

                <button
                    onClick={() => {
                        setGrouped(true);
                    }}
                    className={`${buttonBase} ${grouped ? activeClass : inactiveClass}`}
                >Group by Category</button>
            </div>

            <div className="space-y-4">
                {!grouped ? (
                    sortedItems.map((item) => (
                        <Item
                            key={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            category={item.category}
                        />
                    ))
                ) : (
                    categoryNames.map((category) => (
                        <section key={category}>
                            <h2 className="text-lg font-semibold text-green-700 capitalize mb-2">{category}</h2>
                            <div className="space-y-2">
                                {itemsByCategory[category].map((item) => (
                                    <Item
                                        key={item.id}
                                        name={item.name}
                                        quantity={item.quantity}
                                        category={item.category}
                                    />
                                ))}
                            </div>
                        </section>
                    ))
                )}
            </div>
        </div>
    );
}