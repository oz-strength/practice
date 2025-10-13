import { Link } from "react-router-dom";

export default function Posts() {
  return (
    <>
      <h1>Posts Component</h1>
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
