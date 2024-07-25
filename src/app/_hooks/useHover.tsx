import { useState, useEffect, useRef } from 'react';

// 사용자 정의 훅: useHover
function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('mouseleave', handleMouseLeave);
    }
    // 정리(clean-up) 함수
    return () => {
      if (node) {
        node.removeEventListener('mouseenter', handleMouseEnter);
        node.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [ref.current]); // ref.current가 변경될 때마다 효과를 재실행합니다.

  return { ref, isHovered };
}

export default useHover;
