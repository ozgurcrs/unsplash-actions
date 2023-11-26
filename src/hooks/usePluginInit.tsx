import { useEffect, useState } from "react";
import { useFetchImages } from "./useFetchImage";
import { ApiStatus } from "@/models";

interface IUsePluginInit {
  pluginInitApiStatus: ApiStatus;
}

export const usePluginInit = (): IUsePluginInit => {
  const [pluginInitApiStatus, setPluginInitApiStatus] = useState<ApiStatus>(
    ApiStatus.IDLE
  );

  const { fetchUnsplashImage } = useFetchImages();

  const fetchInitApi = async () => await fetchUnsplashImage();

  useEffect(() => {
    setPluginInitApiStatus(ApiStatus.LOADING);
    fetchInitApi();
    setPluginInitApiStatus(ApiStatus.SUCCESS);
  }, []);

  return {
    pluginInitApiStatus,
  };
};
