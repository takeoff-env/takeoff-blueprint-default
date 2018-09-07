interface UserLogin {
  username: string;
  password: string;
}

interface TokenValues {
  displayName: string;
  exp: number;
  iat: number;
  id: string;
  scope: string;
  username: string;
}

interface LoginResponse {
  token: string;
}
