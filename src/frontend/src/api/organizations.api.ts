import axios from "axios";
import { Organization } from "shared";
import { API_URL } from "./api";

export const getAllOrganizations = async (): Promise<Organization[]> => {
  const response = await axios.get(`${API_URL}/organizations`);
  return response.data;
};

export const createOrganization = async (data: Organization) => {
  const response = await axios.post(`${API_URL}/organizations/new`, data, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  return response.data;
};

export const editOrganization = async (data: Organization) => {
  const response = await axios.post(
    `${API_URL}/organizations/${data.id}/edit`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );
  return response.data;
};
