import apiClient from "./apiClient";
import type { Vehicle } from "../types/vehicle";
import type { PagedResponse } from "../types/paged";

export const getVehiclesByCustomer = async (
  customerId: number
): Promise<Vehicle[]> => {
  const response = await apiClient.get<PagedResponse<Vehicle>>(
    `/customers/${customerId}/vehicles`
  );

  return response.data.items;
};