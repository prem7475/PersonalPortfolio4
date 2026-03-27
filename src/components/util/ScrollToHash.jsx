import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "../../animations/LenisProvider";

export default function ScrollToHash() {
  const location = useLocation();
  const { scrollTo } = useLenis();

  useEffect(() => {
    if (!location.hash) {
      scrollTo(0, { immediate: true, offset: 0 });
      return;
    }

    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const t = window.setTimeout(() => {
      scrollTo(el);
    }, 50);

    return () => window.clearTimeout(t);
  }, [location.hash, location.pathname, scrollTo]);

  return null;
}
