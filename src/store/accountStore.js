import { create } from 'zustand';

export const useAccountStore = create((set) => ({
  // --- STATE ---
  // Our initial state is an empty array of accounts.
  accounts: [],

  // --- ACTIONS ---
  // Actions are functions that modify the state.
  addAccount: (newAccount) => {
    set((state) => ({
      // Add the new account to the existing accounts array.
      // We also add a unique ID for list rendering purposes.
      accounts: [...state.accounts, { id: Date.now().toString(), ...newAccount }],
    }));
  },
}));
