import React, { useCallback } from 'react';
import { useAtom } from 'jotai';
// import { useZustandStore } from '../store/Zustand';
import { Button } from './Button';
import { Card } from './Card';
import { clicksCount } from '../store/Jotai';

export const Counter: React.FC = () => {
  const [clicks, setCount] = useAtom(clicksCount);
  // const { clicks, incrementClicks } = useZustandStore();

  const incrementCount = useCallback(() => {
    setCount(prev => prev + 1);
    // incrementClicks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicks]);

  return (
    <Card title="Data Provider">
      <div style={{ marginBottom: '10px' }}>Current count: {clicks}</div>
      <Button onClick={incrementCount}>Add more</Button>
    </Card>
  );
};
