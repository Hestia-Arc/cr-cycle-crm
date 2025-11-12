import { queryOptions, useQuery } from "@tanstack/react-query";

import { api } from "@/lib/api-client";
import { Lead, Meta } from "@/types/api";
import { QueryConfig } from "@/lib/react-query/query-client";

export const getLeads = (
  { page }: { page?: number } = { page: 1 }
): Promise<{
  data: Lead[];
  meta: Meta;
}> => {
  return api.get(`/leads`, {
    params: {
      page,
    },
  });
};

export const getLeadsQueryOptions = ({ page = 1 }: { page?: number } = {}) => {
  return queryOptions({
    queryKey: ["leads", { page }],
    queryFn: () => getLeads({ page }),
  });
};

type UseLeadsOptions = {
  page?: number;
  queryConfig?: QueryConfig<typeof getLeadsQueryOptions>;
};

export const useLeads = ({ queryConfig, page }: UseLeadsOptions) => {
  return useQuery({
    ...getLeadsQueryOptions({ page }),
    ...queryConfig,
  });
};
