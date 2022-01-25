import create from "zustand";

type Store = {
  clicks: number,
  incrementClicks: () => void;
}

export const useZustandStore = create<Store>(set => ({
  clicks: 0,
  incrementClicks: () => set(state => ({ clicks: state.clicks + 1})),
}));
