import { useEffect } from "react";
import { Outlet, useLocation, useParams, useNavigate } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import { Toaster } from "react-hot-toast";
import { ModalProvider } from "react-context-modals";
import "react-context-modals/dist/main.css";
function getCurrentPath(pathname) {
  const paths = pathname
    .split("/")
    .filter((path) => path !== "")
    .map((path) => path.charAt(0).toUpperCase().concat(path.slice(1)));
  return paths.length === 1 ? paths[0] : paths[paths.length - 1];
}

function App() {
  const { pathname } = useLocation();
  const currentPath = getCurrentPath(pathname);
  const scaleId = Number(useParams().scaleId) - 1;
  const navigate = useNavigate();

  useEffect(() => {
    if (currentPath === "App") navigate("/app/categories");
    if (currentPath === "Scale") navigate("/app/scales");
    if (scaleId < 0 || scaleId >= 16) navigate("/app/scales");
  }, []);

  return (
    <>
      <ModalProvider>
        <AppHeader />
        <Toaster />
        <Outlet />
      </ModalProvider>
    </>
  );
}

export default App;
