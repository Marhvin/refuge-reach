import React, { useEffect } from "react";
import { useLoginUser } from "../hooks/user.hooks";

const UserAuthCallback: React.FC = () => {
  const { mutateAsync: loginUser, isPending, isError, error } = useLoginUser();

  const searchParams = new URLSearchParams(window.location.search);
  const code = searchParams.get("code");
  const scope = searchParams.get("scope");

  useEffect(() => {
    loginUser({ code, scope });
  }, [loginUser, code, scope]);

  if (isPending) return <>Redirecting...</>;

  if (isError || error) return <>Encountered an error during login</>;
};

export default UserAuthCallback;
