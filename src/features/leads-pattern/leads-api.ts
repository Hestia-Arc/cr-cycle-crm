export type Lead = {
  id: string;
  name: string;
  email: string;
};

export const leadsApi = {
  getAllLeads: async (): Promise<Lead[]> => {
    const res = await fetch(`/api/leads`);
    if (!res.ok)
      throw new Error(`Failed to fetch leads: ${res.status} ${res.statusText}`);
    return (await res.json()) as Lead[];
  },
  getLeadById: async (id: string): Promise<Lead> => {
    const res = await fetch(`/api/leads/${id}`);
    if (!res.ok)
      throw new Error(
        `Failed to fetch lead ${id}: ${res.status} ${res.statusText}`
      );
    return (await res.json()) as Lead;
  },
  createLead: async (data: Lead): Promise<Lead> => {
    const res = await fetch(`/api/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok)
      throw new Error(`Failed to create lead: ${res.status} ${res.statusText}`);
    return (await res.json()) as Lead;
  },
};
