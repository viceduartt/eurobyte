import {create} from "zustand";

export const useLocaleStore = create((set) => ({
  locale: "pt",
  setLocale: (locale) => set({locale})
}));
