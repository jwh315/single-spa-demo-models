// Anything exported from this file is importable by other in-browser modules.
export interface IUser {
  username: string;
  password: string;
  fullName: string;
}

export interface IRootProps {
  publish: () => {};
  subscribe: () => {};
  user: IUser;
}
