export type BaseEntity = {
  id: string;
  createdAt: number;
};

export type Entity<T> = {
  [K in keyof T]: T[K];
} & BaseEntity;

export type Meta = {
  page: number;
  total: number;
  totalPages: number;
};

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  status: "new" | "contacted" | "qualified" | "lost";
  createdAt: string;
  updatedAt: string;
};
