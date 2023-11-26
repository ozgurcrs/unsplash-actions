import { api } from "@/helper/api";
import { convertToData } from "@/helper/convert";
import { Images } from "@/models";
import { create } from "zustand";

type State = {
  searchedImages: Images[];
};

type Action = {
  fetchSearchImages: (value: string) => void;
};

export const useSearchImages = create<State & Action>((set) => ({
  searchedImages: [],
  fetchSearchImages: async (value: string) => {
    const data = await api(`search/photos?query=${value}`);

    const response = convertToData(data.results);

    set(() => ({ searchedImages: response }));
  },
}));
