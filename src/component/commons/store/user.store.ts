import { create } from "zustand";
interface User {
  mem_email: string;
  accessToken: string;
  refreshToken: string;
  grantType: string;
}
interface UserStore {
  user: User | null;
  setUser: (user: any) => void;
  removeUser: () => void;
}

const userStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user: any) => {
    set((state) => ({ ...state, user }));
  },
  removeUser: () => {
    set((state) => ({ ...state, user: null }));
  },
}));

export default userStore;
