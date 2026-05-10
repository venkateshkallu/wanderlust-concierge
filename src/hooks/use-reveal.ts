import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useReveal() {
  const location = useLocation();
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const initReveal = () => {
      const els = document.querySelectorAll<HTMLElement>('.reveal');
      
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in');
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
      );
      
      els.forEach((el) => io.observe(el));
      
      return io;
    };
    
    const timer = setTimeout(() => {
      initReveal();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
}
