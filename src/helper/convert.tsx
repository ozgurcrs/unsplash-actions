import { Images } from "@/models";

export const convertToData = (data: any) => {
  const convertedData: Images[] = [];

  data.forEach((item: any) => {
    convertedData.push({
      id: item.id,
      likes: item.likes,
      thumb: item.urls.thumb,
      full: item.urls.full,
      description: item.description,
    });
  });

  return convertedData;
};
