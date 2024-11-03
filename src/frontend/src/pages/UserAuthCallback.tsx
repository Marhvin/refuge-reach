import React, { useEffect } from "react";
import { API_URL } from "../api";

const UserAuthCallback: React.FC = () => {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    const scope = searchParams.get("scope");

    if (code) {
      const url = `${API_URL}/user/login/code`;

      const bodyData = JSON.stringify({
        code: code,
        scope: scope,
      });

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: bodyData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            window.location.href = "/find";
          }
        })
        .catch((error) => {
          console.error("Error during login:", error);
        });
    }
  }, []);

  return <>Redirecting...</>;
};

export default UserAuthCallback;
