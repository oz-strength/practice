export default function Product({ product }) {
  return (
    <div className="border p-4">
      <h2 className="text-lg font-bold mb-2">
        No. {product.id} {product.title}
      </h2>
      <p className="text-gray-600 mb-3">{product.body}</p>
      <div className="flex gap-4 text-sm text-gray-500">
        <span>userId: {product.userId}</span>
        <span>views: {product.views}</span>
      </div>
    </div>
  );
}
