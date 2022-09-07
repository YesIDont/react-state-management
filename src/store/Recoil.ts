import { atom } from 'recoil';

export const RecoilStore = atom({
  key: 'clicksState', // unique ID (with respect to other atoms/selectors)
  default: {
    clicks: 0, // default value (aka initial value)
  },
});
