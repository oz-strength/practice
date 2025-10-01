import Product from "./Product";

export default function Carts() {
  // **요구사항**

  const carts = {
    id: 1,
    products: [
      {
        id: 168,
        title: "Charger SXT RWD",
        price: 32999.99,
        quantity: 3,
        total: 98999.97,
        discountPercentage: 13.39,
        discountedTotal: 85743.87,
        thumbnail:
          "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png",
      },
      {
        id: 78,
        title: "Apple MacBook Pro 14 Inch Space Grey",
        price: 1999.99,
        quantity: 2,
        total: 3999.98,
        discountPercentage: 18.52,
        discountedTotal: 3259.18,
        thumbnail:
          "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
      },
      {
        id: 183,
        title: "Green Oval Earring",
        price: 24.99,
        quantity: 5,
        total: 124.94999999999999,
        discountPercentage: 6.28,
        discountedTotal: 117.1,
        thumbnail:
          "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png",
      },
      {
        id: 100,
        title: "Apple Airpods",
        price: 129.99,
        quantity: 5,
        total: 649.95,
        discountPercentage: 12.84,
        discountedTotal: 566.5,
        thumbnail:
          "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
      },
    ],
    total: 103774.85,
    discountedTotal: 89686.65,
    userId: 33,
    totalProducts: 4,
    totalQuantity: 15,
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">상품 목록</h1>
      <div className="flex flex-wrap gap-4">
        {/* // - Carts 컴포넌트에서 `carts` 객체의 `products` 배열 데이터를 Product 컴포넌트로 Props 전달
            // - 4개의 상품 데이터를 순서대로 각각 4개의 Product 컴포넌트에 Props를 활용해서 전달
            // - Product 컴포넌트에서 구조 분해 할당을 사용하여 Props 받기
            // - 상품명(title), 가격(price), 재고(quantity), 총 가격(total), 상품 이미지(thumbnail) 표현 */}
        {/* 아래 Product 반복 작성 부분을 수정한다 */}
        {/* 배열의 map() 메서드를 활용한다 */}
        {carts.products.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
