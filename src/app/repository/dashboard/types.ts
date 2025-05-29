export type TLink = {
  id: string;
  title: string;
  url: string;
  active: boolean;
};

export type TTheme = {
  primary: string;
  secondary: string;
};

export type TProfile = {
  id: string;
  username: string;
  description: string;
  image: string;
  theme: TTheme | null;
  links: TLink[];
};

export type TProfileResponse = TProfile;
