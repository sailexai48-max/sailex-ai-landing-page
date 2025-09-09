import { useEffect, useRef } from 'react';

export const useScrollReveal = () => {
  const elementsRef = useRef<Set<Element>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Observe all elements with scroll-reveal class
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => {
      observer.observe(el);
      elementsRef.current.add(el);
    });

    return () => {
      elementsRef.current.forEach((el) => observer.unobserve(el));
      elementsRef.current.clear();
    };
  }, []);

  const addElement = (element: Element) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);
    elementsRef.current.add(element);
  };

  return { addElement };
};