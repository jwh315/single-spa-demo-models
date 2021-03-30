// Anything exported from this file is importable by other in-browser modules.
export interface IUser {
  username: string;
  password: string;
  fullName: string;
}

export interface IEventer {
  publish: () => {};
  subscribe: () => {};
  unsubscribe: () => {};
}

export interface IRootProps {
  eventer: IEventer;
  user: IUser;
}

export interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
}
