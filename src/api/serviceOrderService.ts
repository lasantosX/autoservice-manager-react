import apiClient from "./apiClient";
import type { ServiceOrder } from "../types/serviceOrder";
import type { PagedResponse } from "../types/paged";

export const getServiceOrders = async (): Promise<ServiceOrder[]> => {
  const response = await apiClient.get<PagedResponse<ServiceOrder>>(
    "/ServiceOrders"
  );

  return response.data.items;
};