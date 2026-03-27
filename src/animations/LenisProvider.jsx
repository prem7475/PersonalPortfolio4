import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";

const LenisContext = createContext({
  lenis: null,
  scrollTo: () => {},
});

export function LenisProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.15,
      lerp: 0.085,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.0,
    });

    lenisRef.current = lenis;

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    const ticker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const refreshTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      window.clearTimeout(refreshTimer);
      gsap.ticker.remove(ticker);
      lenis.off("scroll", onScroll);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = useCallback((target, options = {}) => {
    const lenis = lenisRef.current;

    if (!lenis) {
      if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: options.immediate ? "auto" : "smooth" });
        return;
      }

      if (target?.scrollIntoView) {
        target.scrollIntoView({ behavior: options.immediate ? "auto" : "smooth" });
      }

      return;
    }

    lenis.scrollTo(target, {
      offset: -92,
      duration: 1.2,
      ...options,
    });
  }, []);

  const value = useMemo(
    () => ({
      lenis: lenisRef.current,
      scrollTo,
    }),
    [scrollTo],
  );

  return <LenisContext.Provider value={value}>{children}</LenisContext.Provider>;
}

export function useLenis() {
  return useContext(LenisContext);
}
