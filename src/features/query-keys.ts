export const queryKeys = {
  leads: {
    all: () => ["leads"],
    byId: (id: string) => ["leads", id],
  },
} as const;
