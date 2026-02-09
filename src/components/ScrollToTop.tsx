import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const prevPathnameRef = useRef<string | null>(null);

  useEffect(() => {
    const prevPathname = prevPathnameRef.current;
    prevPathnameRef.current = pathname;

    // Importante: não force scroll quando SOMENTE o hash muda (ex.: clique em âncora na mesma página).
    // Isso evita o efeito “elástico”/puxão durante a rolagem.
    const isFirstMount = prevPathname === null;
    const pathnameChanged = prevPathname !== pathname;
    if (!isFirstMount && !pathnameChanged) return;

    if (hash) {
      // Aguarda o DOM montar para garantir que o elemento do hash existe
      requestAnimationFrame(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "auto", block: "start" });
        }
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
