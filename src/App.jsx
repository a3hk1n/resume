import { useState, useCallback, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Toast from "./components/Toast/Toast";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

export default function App() {
  const [toastMsg, setToastMsg] = useState("");
  const toastTimer = useRef(0);

  const triggerToast = useCallback((msg) => {
    setToastMsg(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastMsg(""), 1800);
  }, []);

  return (
    <>
      <Preloader />
      <CustomCursor />
      <Toast message={toastMsg} />
      <Navbar onToast={triggerToast} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
