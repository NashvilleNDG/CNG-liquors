import React, { useEffect, useRef, useState } from 'react';

export default function LazySection({ children, threshold = 0.01, minHeight = '300px' }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '400px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, isVisible]);

  return (
    <div ref={sectionRef} className="lazy-section">
      {isVisible ? children : <div style={{ minHeight }} />}
    </div>
  );
}