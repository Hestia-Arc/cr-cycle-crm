import { queryKeys } from "../query-keys";
import { leadsApi } from "./leads-api";

import { useQuery } from "@tanstack/react-query";

export const useGetAllLeads = () => {
  return useQuery({
    queryKey: queryKeys.leads.all(),
    queryFn: leadsApi.getAllLeads,
  });
};

// export const getDiscussionsQueryOptions = ({
//   page = 1,
// }: { page?: number } = {}) => {
//   return queryOptions({
//     queryKey: ['discussions', { page }],
//     queryFn: () => getDiscussions({ page }),
//   });
// };

// type UseDiscussionsOptions = {
//   page?: number;
//   queryConfig?: QueryConfig<typeof getDiscussionsQueryOptions>;
// };

// export const useDiscussions = ({
//   queryConfig,
//   page,
// }: UseDiscussionsOptions) => {
//   return useQuery({
//     ...getDiscussionsQueryOptions({ page }),
//     ...queryConfig,
//   });
// };

// --------------------------
export const useGetLeadById = (
  id: string,
  { enabled }: { enabled: boolean }
) => {
  return useQuery({
    queryKey: queryKeys.leads.byId(id),
    queryFn: () => leadsApi.getLeadById(id),
    enabled,
  });
};
