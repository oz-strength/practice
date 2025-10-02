import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";
// 요구사항
// - 페이지네이션을 위한 적절한 요청 URL을 작성한다
// - 4개의 페이지네이션 버튼의 onClick 속성에서 호출할 함수를 작성하고, 연결한다
// - 처음으로 : 첫 페이지로 이동
// - 마지막으로 : 마지막 페이지로 이동
// - 이전 : 이전 5개 상품 표시
// - 다음 : 다음 5개 상품 표시
export default function Container() {
  const [products, setProducts] = useState([]); // 상품 목록 상태
  const [skip, setSkip] = useState(0); // 상품 시작 인덱스 상태
  const LIMIT = 5; // 한 페이지에 표시할 상품 수
  const [total, setTotal] = useState(0); // 전체 상품 수 상태

  useEffect(() => {
    async function fetchProducts() {
      // 적절한 요청 URL을 작성한다
      // https://dummyjson.com/products?limit=10&skip=10&select=title,price
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`,
      );
      console.log(response);
      setProducts(response["data"]["products"]);
      setTotal(response.data.total); // 전체 상품 수 저장
    }

    fetchProducts();
  }, [skip]);

  // 마지막 페이지 skip 값 계산
  const lastPageSkip = Math.floor((total - 1) / LIMIT) * LIMIT;

  // 적절한 함수를 작성한다
  const handleFirstPage = () => {
    setSkip(0);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex gap-2 mb-6">
        <button
          className="bg-gray-500 text-white px-3 py-1 cursor-pointer"
          onClick={handleFirstPage}>
          처음으로
        </button>
        <button
          className="bg-blue-500 text-white px-3 py-1 cursor-pointer"
          onClick={() => {
            setSkip(prev => Math.max(prev - LIMIT, 0));
          }}>
          이전
        </button>
        <button
          className="bg-blue-500 text-white px-3 py-1 cursor-pointer"
          onClick={() => {
            setSkip(prev => Math.min(prev + LIMIT, lastPageSkip));
          }}>
          다음
        </button>
        <button
          className="bg-gray-500 text-white px-3 py-1 cursor-pointer"
          onClick={() => {
            setSkip(lastPageSkip);
          }}>
          마지막으로
        </button>
      </div>
      <div className="space-y-4">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
