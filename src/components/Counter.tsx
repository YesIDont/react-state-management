import React, { useState } from 'react';
import { Button } from './Button';
import { Card } from './Card';

export const Counter: React.FC = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <Card title="Internal Data">
      <div style={{ marginBottom: '10px' }}>Current count: {clicks}</div>
      <Button onClick={() => setClicks((prev) => prev + 1)}>Add more</Button>
    </Card>
  );
};
