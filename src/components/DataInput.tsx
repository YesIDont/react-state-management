import React, { useState } from 'react';
import { Button } from './Button';
import { Card } from './Card';

export const DataInput: React.FC = () => {
  const [clicks, setClicks] = useState<number | null>(null);

  return (
    <Card title="Data Input">
      <div className="margin-bottom">Current count: {clicks ?? 'no data'}</div>
      <Button
        onClick={() => setClicks(Math.round(Math.random() * 2359))}
        className="margin-bottom"
      >
        Get API Data
      </Button>
      <Button onClick={() => setClicks(clicks)}>Save API Data</Button>
    </Card>
  );
};
