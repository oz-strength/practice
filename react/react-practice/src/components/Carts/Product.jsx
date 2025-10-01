export default function Product({ price, quantity, thumbnail, title, total }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2>상품명(title) {title}</h2>
      <p>가격(price) : {price}</p>
      <p>재고(quantity) {quantity}</p>
      <p>총 가격(total) {total}</p>
      <img src={thumbnail} alt="상품 이미지(thumbnail)" />
    </div>
  );
}
