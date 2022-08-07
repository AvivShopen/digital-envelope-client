import create from "zustand";

interface AuthState {
  token: string;
  setToken: (token: string) => void;
  // clearToken: () => void;
}

const useStore = create<AuthState>((set) => ({
  token: "",
  //Set the global event
  setToken: (token) => set((state) => ({ token })),
}));

export { useStore as useAuthStore };
