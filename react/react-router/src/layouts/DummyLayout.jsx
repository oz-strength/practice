import { Outlet } from "react-router-dom";
export default function DummyLayout() {
  return (
    <>
      <h1>DummyLayout Component</h1>
      <Outlet />
    </>
  );
}
