"use client";
import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

export default function Page() {
    const [items, setItems] = useState(itemsData);

    function handleAddItem(newItem) {
        setItems((prevItems) => [
            ...prevItems,
            { id: crypto.randomUUID(), ...newItem },
        ]);
    }
    return (
        <main className="min-h-screen bg-gradient-to-b from-[#05010f] via-[#0a001f] to-[#1b0033] text-gray-200 flex flex-col items-center py-12 space-y-10">
            <h1 className="text-5xl font-extrabold text-cyan-400 tracking-wide drop-shadow-[0_0_20px_#00ffff] select-none">
                Shopping List
            </h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}