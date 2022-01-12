import { Counter } from './Counter';
import { Card } from './Card';
import { DataInput } from './DataInput';

export function App() {
  return (
    <div className="App">
      <Counter />

      <DataInput />

      <Card title="Parent One">
        <Card title="Parent Two" />
        <Card title="Parent Three">
          <DataInput />
        </Card>
      </Card>

      <Card title="Level 0" columns>
        <Card title="Level 1">
          <Card title="Level 2" columns>
            <Card title="Level 3">
              <Card title="Data Consumer" />
            </Card>
            <Card title="Level 3">
              <DataInput />
            </Card>
          </Card>
        </Card>
        <Card title="Level 1">
          <Card title="Data Consumer" />
          <Card title="Level 2">
            <Card title="Data Consumer" />
          </Card>
          <Card title="Data Consumer" />
        </Card>
      </Card>
    </div>
  );
}
