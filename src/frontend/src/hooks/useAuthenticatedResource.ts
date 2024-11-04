import { useEffect } from "react";
import { User, UserRole } from "../../../shared";
import { API_URL } from "../api/api";

export const useAuthenticatedResource = () => {
  useEffect(() => {
    const fetchUserAuthenticated = async () => {
      const response = await fetch(`${API_URL}/user/get`, {
        credentials: "include",
      });

      if (!response.ok) {
        window.location.href = "/login";
      }

      const user: User = await response.json();
      if (user.role !== UserRole.ADMIN) window.location.href = "/find";
    };

    fetchUserAuthenticated();
  }, []);
};
