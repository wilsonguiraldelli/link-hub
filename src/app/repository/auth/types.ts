export type TUser = {
  id: string;
  name: string;
  email: string;
  username: string;
};

export type TAuthTokens = {
  accessToken: string;
  refreshToken: string;
};

export type TLoginResponse = {
  user: TUser;
  authTokens: TAuthTokens;
};

export type TLoginCredentials = {
  email: string;
  password: string;
};
