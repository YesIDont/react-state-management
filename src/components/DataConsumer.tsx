import { useAtom } from 'jotai';
import React, { useContext, useState } from 'react';
import { useRecoilState } from 'recoil';
import { UserClickContext } from '../store/Context';
import { clicksCount } from '../store/Jotai';
import { RecoilStore } from '../store/Recoil';
import { useZustandStore } from '../store/Zustand';
import { Card } from './Card';

export const DataConsumer: React.FC = () => {
  // const clicks = useContext(UserClickContext);
  const [store] = useRecoilState(RecoilStore);
  // const [clicks] = useAtom(clicksCount);
  // const { clicks } = useZustandStore();

  return <Card title="Data Consumer">{store.clicks}</Card>;
};
