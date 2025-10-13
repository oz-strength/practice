import { Link } from "react-router-dom";

export default function Products() {
  const dummyProducts = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (i + 1) * 10000,
    image: `https://picsum.photos/300/200?random=${i + 1}`,
  }));

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* ✅ 상단 네비게이션 바 */}
        <nav className="bg-white shadow-md py-4 px-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">🛍️ Products</h1>
          <div className="flex gap-6 text-gray-700 font-medium">
            <Link to="/" className="hover:text-blue-500 transition-colors">
              Home
            </Link>
            <Link
              to="/dummy/products"
              className="hover:text-blue-500 transition-colors">
              Products
            </Link>
            <Link
              to="/dummy/carts"
              className="hover:text-blue-500 transition-colors">
              Carts
            </Link>
            <Link
              to="/dummy/posts"
              className="hover:text-blue-500 transition-colors">
              Posts
            </Link>
          </div>
        </nav>

        {/* ✅ 본문 영역 */}
        <main className="p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {dummyProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col items-start">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 mb-3">
                    {product.price.toLocaleString()}원
                  </p>
                  <button className="mt-auto px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
