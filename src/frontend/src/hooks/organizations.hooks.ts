import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Organization } from "shared";

const fetchOrganizations = async (): Promise<Organization[]> => {
  const response = await axios.get("http://localhost:5767/organizations");
  return response.data;
};

export const useGetAllOrganizations = () => {
  return useQuery({ queryKey: ["organizations"], queryFn: fetchOrganizations });
};
