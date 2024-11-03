import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Organization } from "shared";
import { API_URL } from "../api";

const fetchOrganizations = async (): Promise<Organization[]> => {
  const response = await axios.get(`${API_URL}/organizations`);
  return response.data;
};

export const useGetAllOrganizations = () => {
  return useQuery({ queryKey: ["organizations"], queryFn: fetchOrganizations });
};
