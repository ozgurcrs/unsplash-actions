import { FC, useContext, useEffect, useState } from "react";
import { CustomInput } from "./components/CustomInput";
import { Button } from "./components/ui/button";
import { useSearchImages } from "./hooks/useSearchImages";
import { PluginInitContext } from "./context/PluginInitContext";
import { Cards } from "./components/Cards";
import { useFetchImages } from "./hooks/useFetchImage";
import { Images } from "./models";

export const App: FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const { images } = useFetchImages();
  const [allImages, setAllImages] = useState<Images[]>(images);
  const { fetchSearchImages } = useSearchImages();

  const { searchedImages } = useSearchImages();
  const { pluginInitApiStatus } = useContext(PluginInitContext);

  const handleChange = (value: string) => {
    setSearchText(value);
  };
  const handleClick = () => {
    fetchSearchImages(searchText);
  };

  useEffect(() => {
    setAllImages(images);

    if (searchedImages.length) {
      setAllImages(searchedImages);
    }
  }, [searchedImages, images]);

  return (
    <div className="w-full h-screen flex-wrap flex justify-center items-center">
      <div className="w-1/3 flex my-24">
        <CustomInput onChange={handleChange} placeholder="Search Image" />
        <Button className="ml-2" onClick={handleClick}>
          Search
        </Button>
      </div>

      <Cards images={allImages} pluginInitApiStatus={pluginInitApiStatus} />
    </div>
  );
};
