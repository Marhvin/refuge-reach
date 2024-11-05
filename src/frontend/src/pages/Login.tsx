import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import {
  useCurrentUser,
  useLoginUserWithRefreshToken,
  useLogoutUser,
} from "../hooks/user.hooks";
import { Footer } from "../components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ExternalLink } from "lucide-react";
import { toastSuccess } from "../utils/toast.utils";
import { UserRole } from "shared";

const googleSsoParams = {
  redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT_URI,
  client_id: import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID,
};

const Login: React.FC = () => {
  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
    error: userError,
  } = useCurrentUser();
  const { mutateAsync: loginUserWithRefreshToken } =
    useLoginUserWithRefreshToken();
  const { mutateAsync: logoutUser } = useLogoutUser();

  useEffect(() => {
    if (
      userError &&
      (userError.response?.data as { message: string; retry: boolean }).retry
    )
      loginUserWithRefreshToken();
  }, [loginUserWithRefreshToken, userError]);

  const handleGoogleSSO = () => {
    const baseUrl = "https://accounts.google.com";
    const endpoint = "/o/oauth2/v2/auth";
    const queryParams = {
      ...googleSsoParams,
      prompt: "consent",
      response_type: "code",
      scope: "email profile",
      access_type: "offline",
    };

    const url = new URL(endpoint, baseUrl);
    url.search = new URLSearchParams(queryParams).toString();
    window.location.href = url.href;
  };

  const handleLogout = () => {
    logoutUser();
    toastSuccess("Logged out successfully");
  };

  return (
    <div>
      <Navbar />
      <div className="relative flex items-center justify-center h-[calc(100vh-7rem)]">
        {(isUserLoading || isUserError || userError) && (
          <div className="relative flex items-center justify-center h-screen">
            <h1 className="absolute text-black text-3xl mb-[15rem]">Sign in</h1>
            <img
              src="/URLogo.png"
              className="absolute h-12 w-35 mb-[9rem]"></img>
            <button
              className="flex items-center bg-white text-gray-800 border border-gray-300 rounded-lg shadow-md p-3 hover:bg-gray-100 transition duration-200"
              onClick={handleGoogleSSO}>
              <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt="Google Logo"
                className="w-7 h-7 mr-2"
              />
              Continue with Google
            </button>
          </div>
        )}
        {!userError && user && (
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle className="text-xl">User</CardTitle>
              <CardDescription>
                Your user options and information.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <p className="font-bold">Information</p>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>Role: {user.role}</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="destructive"
                onClick={handleLogout}
                type="button"
                className="px-4 w-full">
                Logout
              </Button>
              {user.role === UserRole.ADMIN && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="ml-2 px-4">
                  <a href="/admin" className="text-lg">
                    Admin Management
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Login;
