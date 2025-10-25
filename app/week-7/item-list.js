"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");
    const [grouped, setGrouped] = useState(false);

    const sortedItems = [...items].sort((a, b) =>
        (a[sortBy] ?? "").toString().localeCompare((b[sortBy] ?? "").toString())
    );

    const itemsByCategory = [...items]
        .sort((a, b) => a.name.localeCompare(b.name))
        .reduce((acc, item) => {
            (acc[item.category] ||= []).push(item);
            return acc;
        }, {});

    return (
        <div className="w-full max-w-md bg-gray-800 rounded-2xl p-5 shadow-lg border border-cyan-700">
            <div className="flex gap-2 mb-6">
                <button
                    onClick={() => { setGrouped(false); setSortBy("name"); }}
                    className={`flex-1 py-2 rounded-lg font-semibold whitespace-nowrap transition-all
                        ${!grouped && sortBy === "name"
                            ? "bg-cyan-600 text-white shadow-[0_0_10px_#00ffff88]"
                            : "bg-[#14112b] hover:bg-[#1c1742] border border-cyan-700 text-cyan-300"
                        }`}
                >
                    Sort by Name
                </button>

                <button
                    onClick={() => { setGrouped(false); setSortBy("category"); }}
                    className={`flex-1 py-2 rounded-lg font-semibold whitespace-nowrap transition-all
                        ${!grouped && sortBy === "category"
                            ? "bg-cyan-600 text-white shadow-[0_0_10px_#00ffff88]"
                            : "bg-[#14112b] hover:bg-[#1c1742] border border-cyan-700 text-cyan-300"
                        }`}
                >
                    Sort by Category
                </button>

                <button
                    onClick={() => setGrouped(true)}
                    className={`flex-1 py-2 rounded-lg font-semibold whitespace-nowrap transition-all
                        ${grouped
                            ? "bg-cyan-600 text-white shadow-[0_0_10px_#00ffff88]"
                            : "bg-[#14112b] hover:bg-[#1c1742] border border-cyan-700 text-cyan-300"
                        }`}
                >
                    Group by Category
                </button>
            </div>

            {!grouped ? (
                sortedItems.map((item) => <Item key={item.id} {...item} />)
            ) : (
                Object.keys(itemsByCategory).map((cat) => (
                    <div key={cat} className="mb-4">
                        <h2 className="text-lg text-cyan-400 font-bold mb-2 capitalize">
                            {cat}
                        </h2>
                        {itemsByCategory[cat].map((item) => (
                            <Item key={item.id} {...item} />
                        ))}
                    </div>
                ))
            )}
        </div>
    );
}