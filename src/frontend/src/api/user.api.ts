import axios from "axios";
import { API_URL } from "./api";

export const getCurrentUser = async () => {
  const response = await axios.get(`${API_URL}/user/get`, {
    withCredentials: true,
  });
  return response.data;
};

export const loginUser = async (code: string | null, scope: string | null) => {
  if (!code || !scope)
    throw new Error("Must provide a code and scope to login");

  const response = await axios.post(
    `${API_URL}/user/login/code`,
    { code, scope },
    { headers: { "Content-Type": "application/json" }, withCredentials: true }
  );
  return response.data;
};

export const loginUserWithRefreshToken = async () => {
  const response = await axios.post(
    `${API_URL}/user/login/refresh-token`,
    undefined,
    { withCredentials: true }
  );
  return response.data;
};

export const logoutCurrentUser = async () => {
  await axios.get(`${API_URL}/user/logout`, {
    withCredentials: true,
  });
};
