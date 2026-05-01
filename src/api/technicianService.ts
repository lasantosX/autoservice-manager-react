import apiClient from "./apiClient";
import type { Technician } from "../types/technician";
import type { PagedResponse } from "../types/paged";

export const getTechnicians = async (): Promise<Technician[]> => {
  const response = await apiClient.get<PagedResponse<Technician>>("/Technicians");
  return response.data.items;
};