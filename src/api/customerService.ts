import apiClient from "./apiClient";
import type { Customer } from "../types/customer";
import type { PagedResponse } from "../types/paged";

export const getCustomers = async (): Promise<Customer[]> => {
  const response = await apiClient.get<PagedResponse<Customer>>("/Customers");
  return response.data.items;
};