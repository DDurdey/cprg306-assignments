export default function Item({ name, quantity, category, onSelect }) {
    return (
        <div
            onClick={() => onSelect?.({ name, category })}
            className="border border-cyan-700 bg-[#09071a] rounded-lg p-4 mb-3 shadow-[0_0_10px_#00ffff22] hover:shadow-[0_0_20px_#00ffff66] transition-transform hover:scale-[1.02] cursor-pointer"
        >
            <p className="font-semibold text-cyan-300 text-lg">{name}</p>
            <p className="text-gray-400 text-sm">Quantity: {quantity}</p>
            <p className="text-gray-500 text-xs uppercase tracking-wider">{category}</p>
        </div>
    );
}