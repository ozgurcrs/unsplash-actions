import { create } from "zustand";
import { api } from "@/helper/api";
import { Images } from "@/models";
import { convertToData } from "@/helper/convert";

type State = {
  images: Images[];
};

type Action = {
  fetchUnsplashImage: () => void;
};

export const useFetchImages = create<State & Action>((set) => ({
  images: [],
  fetchUnsplashImage: async () => {
    const response = await api("photos");

    const data: Images[] = convertToData(response);

    set(() => ({ images: data }));
  },
}));
