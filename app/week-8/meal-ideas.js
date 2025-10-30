"use client";
import { useEffect, useState } from "react";

// Fetch meal ideas for a given ingredient
async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error("Error fetching meal ideas:", error);
        return [];
    }
}

// Fetch details (ingredients) for a selected meal
async function fetchMealDetails(mealId) {
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );
        const data = await response.json();
        return data.meals ? data.meals[0] : null;
    } catch (error) {
        console.error("Error fetching meal details:", error);
        return null;
    }
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        async function loadMealIdeas() {
            if (!ingredient) return;
            const mealData = await fetchMealIdeas(ingredient);
            setMeals(mealData);
            setSelectedMeal(null);
            setIngredients([]);
        }
        loadMealIdeas();
    }, [ingredient]);

    async function handleMealClick(mealId) {
        const details = await fetchMealDetails(mealId);
        if (details) {
            const ing = [];
            for (let i = 1; i <= 20; i++) {
                const name = details[`strIngredient${i}`];
                const measure = details[`strMeasure${i}`];
                if (name && name.trim()) {
                    ing.push(`${name} - ${measure}`);
                }
            }
            setIngredients(ing);
            setSelectedMeal(details);
        }
    }

    return (
        <div className="w-full max-w-lg bg-gray-800 rounded-2xl p-5 shadow-lg border border-cyan-700 overflow-y-auto">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                Meal Ideas {ingredient ? `for "${ingredient}"` : ""}
            </h2>

            {!ingredient ? (
                <p className="text-gray-400">Select an ingredient to see meal ideas.</p>
            ) : meals.length === 0 ? (
                <p className="text-gray-400">No meals found for this ingredient.</p>
            ) : (
                <ul className="space-y-3">
                    {meals.map((meal) => (
                        <li
                            key={meal.idMeal}
                            className={`p-3 rounded-lg border border-cyan-700 cursor-pointer hover:bg-[#1a1333] transition-all ${selectedMeal?.idMeal === meal.idMeal ? "bg-[#14112b]" : ""
                                }`}
                            onClick={() => handleMealClick(meal.idMeal)}
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={meal.strMealThumb}
                                    alt={meal.strMeal}
                                    className="w-16 h-16 rounded-lg object-cover border border-cyan-700"
                                />
                                <p className="text-cyan-300 font-semibold">{meal.strMeal}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {selectedMeal && ingredients.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">
                        Ingredients for {selectedMeal.strMeal}
                    </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {ingredients.map((ing, index) => (
                            <li key={index}>{ing}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}