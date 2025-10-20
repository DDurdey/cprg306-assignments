

export default function Item({ name, quantity, category }) {
    return (
        <div className=" border-4 border-black rounded-lg p-4 mb-4 w-full bg-gradient-to-b from-grey-400 to-blue-700 shadow-md">
            <p className="text-lg font-semibold text-center">{name}</p>
            <p className="text-center">Quantity: {quantity}</p>
            <p className="text-center">Category: {category}</p>
        </div>
    );
}