import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">🏠 Home</h1>

        <nav className="flex flex-col gap-4 w-64">
          <Link
            to="/dummy/products"
            className="block text-center py-3 rounded-2xl bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-600 transition-all duration-200">
            🛍️ Products
          </Link>

          <Link
            to="/dummy/carts"
            className="block text-center py-3 rounded-2xl bg-green-500 text-white font-semibold shadow-md hover:bg-green-600 transition-all duration-200">
            🛒 Carts
          </Link>

          <Link
            to="/dummy/posts"
            className="block text-center py-3 rounded-2xl bg-purple-500 text-white font-semibold shadow-md hover:bg-purple-600 transition-all duration-200">
            📝 Posts
          </Link>
        </nav>
      </div>
    </>
  );
}
