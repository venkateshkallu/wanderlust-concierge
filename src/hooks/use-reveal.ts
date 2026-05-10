import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";

export function useReveal() {
  const router = useRouter();
  
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const initReveal = () => {
      const els = document.querySelectorAll<HTMLElement>(".reveal");
      
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
      );
      
      els.forEach((el) => io.observe(el));
      
      return io;
    };
    
    // Small delay to ensure DOM is fully hydrated
    const timer = setTimeout(() => {
      const observer = initReveal();
      
      // Cleanup function
      return () => {
        observer.disconnect();
      };
    }, 100);
    
    return () => clearTimeout(timer);
  }, [router.state.location.pathname]);
}
