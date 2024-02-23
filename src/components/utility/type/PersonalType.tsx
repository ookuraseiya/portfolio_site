type Image = {
  url: string;
  height: number;
  width: number;
};

export type PersonalType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  image: Image;
  details: string;
};
