import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductContainer() {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc"); // asc = 오름차순, desc = 내림차순

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(res => setData(res.products));
  }, []);

  const handleSort = type => {
    if (sortType === type) {
      // 같은 타입이면 순서 토글
      setSortOrder(prev => (prev === "asc" ? "desc" : "asc"));
    } else {
      // 다른 타입이면 새 타입으로 변경, 오름차순 초기화
      setSortType(type);
      setSortOrder("asc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    let comparison = 0;
    if (sortType === "price") {
      comparison = a.price - b.price;
    } else if (sortType === "rating") {
      comparison = b.rating - a.rating; // rating 기본 내림차순
    } else {
      comparison = a.id - b.id;
    }

    return sortOrder === "asc" ? comparison : -comparison;
  });

  return (
    <>
      <div className="flex justify-center gap-2 my-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleSort("id")}>
          ID {sortType === "id" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleSort("price")}>
          가격 {sortType === "price" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleSort("rating")}>
          평점 {sortType === "rating" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {sortedData.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
