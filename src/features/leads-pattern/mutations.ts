import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Lead, leadsApi } from "./leads-api";
import { queryKeys } from "../query-keys";

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Lead) => leadsApi.createLead(data),
    onSuccess: () => {
      // Invalidate and refetch queries using same key
      queryClient.invalidateQueries({ queryKey: queryKeys.leads.all() });
    },
  });
};
