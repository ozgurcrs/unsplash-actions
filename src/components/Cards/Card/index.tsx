import { FC } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { ApiStatus, Images } from "@/models";

type ImageCard = {
  image: Images;
  pluginInitApiStatus: ApiStatus;
};

export const ImageCard: FC<ImageCard> = ({ image, pluginInitApiStatus }) => {
  return (
    <div className=" cursor-pointer w-1/6 shadow-md rounded overflow-hidden h-48">
      {pluginInitApiStatus === ApiStatus.LOADING ? (
        <Skeleton className="w-full h-full rounded" />
      ) : (
        <img className=" w-full h-48 object-cover" src={image.thumb} alt="" />
      )}
    </div>
  );
};
