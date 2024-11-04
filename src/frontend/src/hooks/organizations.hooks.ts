import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createOrganization,
  editOrganization,
  getAllOrganizations,
} from "../api/organizations.api";
import { Organization } from "shared";

export const useGetAllOrganizations = () => {
  return useQuery<Organization[], Error>({
    queryKey: ["organizations"],
    queryFn: getAllOrganizations,
  });
};

export const useCreateOrganization = () => {
  const queryClient = useQueryClient();
  return useMutation<Organization, Error, Organization>({
    mutationKey: ["organizations"],
    mutationFn: async (organization: Organization) => {
      return await createOrganization(organization);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["organizations"] });
    },
  });
};

export const useEditOrganization = () => {
  const queryClient = useQueryClient();
  return useMutation<Organization, Error, Organization>({
    mutationKey: ["organizations"],
    mutationFn: async (organization: Organization) => {
      return await editOrganization(organization);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["organizations"] });
    },
  });
};
