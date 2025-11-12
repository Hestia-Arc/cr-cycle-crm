import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

import { api } from "@/lib/api-client";

import { MutationConfig } from "@/lib/react-query/query-client";
import { Lead } from "@/types/api";
import { getLeadsQueryOptions } from "./get-leads";

export const createLeadInputSchema = z.object({
  title: z.string().min(1, "Required"),
  body: z.string().min(1, "Required"),
  public: z.boolean(),
});

export type CreateLeadInput = z.infer<typeof createLeadInputSchema>;

export const createLead = ({
  data,
}: {
  data: CreateLeadInput;
}): Promise<Lead> => {
  return api.post(`/leads`, data);
};

type UseCreateLeadOptions = {
  mutationConfig?: MutationConfig<typeof createLead>;
};

export const useCreateLead = ({
  mutationConfig,
}: UseCreateLeadOptions = {}) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: getLeadsQueryOptions().queryKey,
      });
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: createLead,
  });
};
