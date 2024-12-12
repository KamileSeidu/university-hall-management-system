import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
