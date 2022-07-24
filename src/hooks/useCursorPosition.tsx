import { useState, useEffect } from 'react';

export default function useCursorPosition() {
  const [cursorPosition, setCursorPosition] = useState({
    X: 0,
    Y: 0
  });

  useEffect(() => {
    const handleCursorMove = (event) => {
      setCursorPosition({
        X: event.screenX,
        Y: event.screenY
      });
    };
    window.addEventListener('mousemove', handleCursorMove);
    return () => window.removeEventListener('mousemove', handleCursorMove);
  }, []);

  return cursorPosition;
}
