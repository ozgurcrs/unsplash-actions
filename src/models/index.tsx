export enum ApiStatus {
  IDLE,
  LOADING,
  SUCCESS,
  ERROR,
}

export type Images = {
  id: string;
  likes: number;
  thumb: string;
  full: string;
  description: string;
};
