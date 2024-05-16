import { useEffect, useState } from 'react';

export default function useComponentSize(ref) {
  const [size, setSize] = useState({ width: 1200, height: 60 });

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const { width, height } = ref.current.getBoundingClientRect();
        setSize({ width, height });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [ref]);

  return size;
}
