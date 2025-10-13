import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Carts() {
  const isLogin = false;
  const navigate = useNavigate();
  if (!isLogin) {
    navigate("/");
  }

  useEffect(() => {
    if (!isLogin) {
      navigate("/"); // 렌더링 후 실행
    }
  }, [isLogin, navigate]);

  return (
    <>
      <h1>Carts Component</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/dummy/products">Products</Link>
      <br />
      <Link to="/dummy/carts">Carts</Link>
      <br />
      <Link to="/dummy/posts">Posts</Link>
    </>
  );
}
