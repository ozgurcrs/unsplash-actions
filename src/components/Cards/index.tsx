import { FC } from "react";
import { ImageCard } from "./Card";
import { ApiStatus, Images } from "@/models";

type Cards = {
  images: Images[];
  pluginInitApiStatus: ApiStatus;
};

export const Cards: FC<Cards> = ({ images, pluginInitApiStatus }) => {
  return (
    <div className="w-full flex flex-wrap gap-12 justify-around px-8">
      {images.map((item) => {
        return (
          <ImageCard pluginInitApiStatus={pluginInitApiStatus} image={item} />
        );
      })}
    </div>
  );
};
