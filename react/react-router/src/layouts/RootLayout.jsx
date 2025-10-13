import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <>
      <h1>RootLayout Component</h1>
      <Outlet />
    </>
  );
}
