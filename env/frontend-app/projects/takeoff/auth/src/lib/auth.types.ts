export interface UserLogin {
  username: string;
  password: string;
}

export interface TokenValues {
  displayName: string;
  exp: number;
  iat: number;
  id: string;
  scope: string;
  username: string;
}

export interface LoginResponse {
  token: string;
}
