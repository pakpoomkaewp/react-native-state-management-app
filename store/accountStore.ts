import { create } from 'zustand';

// Define the shape of an account
export interface Account {
  id: string;
  name: string;
  balance: number;
}

// Define the shape of our store's state and actions
interface AccountState {
  accounts: Account[];
  addAccount: (newAccount: Omit<Account, 'id'>) => void;
}

// Initial data, which we will move into the store
const initialAccounts: Account[] = [
  { id: '1', name: 'Savings Account', balance: 5250.75 },
  { id: '2', name: 'Checking Account', balance: 1234.56 },
  { id: '3', name: 'Credit Card', balance: -876.21 },
  { id: '4', name: 'Investment Portfolio', balance: 15400.0 },
];

// Create the store
export const useAccountStore = create<AccountState>((set) => ({
  // State
  accounts: initialAccounts,

  // Actions
  addAccount: (newAccount) => {
    set((state) => ({
      accounts: [
        ...state.accounts,
        {
          id: Date.now().toString(), // Create a simple unique ID
          ...newAccount,
        },
      ],
    }));
  },
}));
