export default function Product({ product }) {
  return (
    // <div className="border border-gray-300 rounded-lg p-4 m-4 shadow-lg w-80">
    //   <h2 className="text-xl font-bold mb-2">{product.title}</h2>
    //   <h2 className="text-xl font-bold mb-2">{product.id}</h2>
    //   <p className="text-gray-900 font-semibold mb-1">
    //     Price: ${product.price}
    //   </p>
    //   <p className="text-gray-600">Rating: {product.rating}</p>
    //   <h2 className="text-xl font-bold mb-2">{product.category}</h2>

    //   <p className="text-gray-700 mb-2">{product.description}</p>
    // </div>
    <div className="border border-gray-300 rounded-lg p-6 m-4 shadow-lg w-80 bg-white">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        {product.title}
      </h2>

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div className="font-semibold text-gray-700">ID</div>
        <div className="text-gray-600">{product.id}</div>

        <div className="font-semibold text-gray-700">Price</div>
        <div className="text-gray-600">${product.price}</div>

        <div className="font-semibold text-gray-700">Rating</div>
        <div className="text-gray-600">{product.rating}</div>

        <div className="font-semibold text-gray-700">Category</div>
        <div className="text-gray-600">{product.category}</div>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm border-t pt-3">
        {product.description}
      </p>
    </div>
  );
}
