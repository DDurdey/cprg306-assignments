"use client";
import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    function handleAddItem(newItem) {
        setItems((prevItems) => [
            ...prevItems,
            { id: crypto.randomUUID(), ...newItem },
        ]);
    }

    function cleanItemName(name) {
        return name
            .split(",")[0]
            .replace(/[^\p{L}\p{N}\s]/gu, "")
            .trim()
            .toLowerCase();
    }

    function handleItemSelect(item) {
        const cleanName = cleanItemName(item.name);
        setSelectedItemName(cleanName);
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#05010f] via-[#0a001f] to-[#1b0033] text-gray-200 flex flex-col items-center py-12 space-y-10">
            <h1 className="text-5xl font-extrabold text-cyan-400 tracking-wide drop-shadow-[0_0_20px_#00ffff] select-none">
                Shopping List & Meal Ideas
            </h1>
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex flex-col gap-8">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
}