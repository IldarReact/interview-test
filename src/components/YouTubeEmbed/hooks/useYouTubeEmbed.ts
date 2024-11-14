// hooks/useIntersectionObserver.tsx
import { useEffect, useRef } from 'react';

type UseIntersectionObserverOptions = {
  threshold?: number;
};

const useIntersectionObserver = <T extends Element>(
  callback: (isVisible: boolean) => void,
  options: UseIntersectionObserverOptions = { threshold: 0.5 }
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        callback(entry.isIntersecting);
      },
      options
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [callback, options]);

  return ref;
};

export default useIntersectionObserver;
