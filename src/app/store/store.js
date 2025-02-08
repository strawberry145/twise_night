import { create } from "zustand"; 

const useStore = create((set) => ({
  energy: 50,
  money: 50,
  isFinish : false,
  increaseMoney: (amount) => set((state) => ({ money: state.money + amount })),
  decreaseMoney: (amount) => set((state) => ({ money: state.money - amount })),
  increaseEnergy: (amount) =>
    set((state) => ({ energy: state.energy + amount })),
  decreaseEnergy: (amount) =>
    set((state) => ({ energy: state.energy - amount })),
  toggleIsFinish : () => set((state) => ({ isFinish: !state.isFinsh  }))
}));

export default useStore;
