import ItemList from './item-list';

export default function page() {
    return (
        <main className="flex flex-col items-center min-h-screen bg-black py-8">
            <h1 className="text-3xl font-bold mb-6 text-white">Shopping List</h1>
            <ItemList />
        </main>
    );
}