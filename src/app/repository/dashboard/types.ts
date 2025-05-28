export type TLink = {
  id: string;
  title: string;
  url: string;
  active: boolean;
};

export type TLinksResponse = {
  id: string;
  links: TLink[];
};
