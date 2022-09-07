import { RecoilRoot } from 'recoil';
// import { Provider } from 'jotai';
// import { Card } from './Card';
import { Counter } from './Counter';
import { DataConsumer } from './DataConsumer';

export function App() {
  return (
    <div className="App">
      {/* <ContextProvider value={DefaultContextValue}> */}
      <RecoilRoot>
        {/* <Provider> */}
        <Counter />
        <DataConsumer />
        <DataConsumer />
        {/* </Provider> */}
      </RecoilRoot>
      {/* </ContextProvider> */}
    </div>
  );
}
