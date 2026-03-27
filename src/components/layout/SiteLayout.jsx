import { Outlet } from "react-router-dom";
import { LenisProvider } from "../../animations/LenisProvider";
import ScrollFX from "../../animations/ScrollFX";
import Footer from "../footer/Footer";
import Navbar from "../nav/Navbar";
import CustomCursor from "../ui/CustomCursor";
import Loader from "../ui/Loader";
import ScrollToHash from "../util/ScrollToHash";

export default function SiteLayout() {
  return (
    <LenisProvider>
      <div className="min-h-screen bg-ink-950 text-white grain">
        <Loader />
        <CustomCursor />
        <Navbar />
        <ScrollToHash />
        <ScrollFX />
        <Outlet />
        <Footer />
      </div>
    </LenisProvider>
  );
}
