import { ChevronDown, MapPin, Newspaper } from "lucide-react";
import { useCurrentUser } from "../hooks/user.hooks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar: React.FC = () => {
  const { data: user, isPending, isError } = useCurrentUser();

  return (
    <nav className="bg-gray-50 text-blue-900 shadow-md max-h-[7rem] h-[7rem]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-28">
          <div className="flex items-center space-x-4">
            <a href="/">
              <img
                src="/URLogo.png"
                alt="Urban Refuge Logo"
                className="h-24 w-auto"
              />
            </a>
          </div>

          {/* Navbar links */}
          <div className="flex items-center space-x-8">
            <a
              href="/"
              className="text-lg hover:text-blue-700 transition-colors"
            >
              Home
            </a>

            {/* About dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-lg hover:text-blue-700 transition-colors outline-none">
                About
                <ChevronDown className="h-4 w-4 opacity-70" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-44">
                <DropdownMenuItem asChild>
                  <a
                    href="/maps"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <MapPin className="h-4 w-4 text-amber-500" />
                    Our Maps
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Media dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-lg hover:text-blue-700 transition-colors outline-none">
                Media
                <ChevronDown className="h-4 w-4 opacity-70" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-44">
                <DropdownMenuItem asChild>
                  <a
                    href="/news"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Newspaper className="h-4 w-4 text-amber-500" />
                    In the News
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="/donate"
              className="text-lg hover:text-blue-700 transition-colors"
            >
              Donate
            </a>

            {/* Find Resources CTA */}
            <a
              href="/find"
              className="bg-amber-500 hover:bg-amber-600 text-white text-lg font-semibold px-5 py-2 rounded-lg transition-colors"
            >
              Find Resources
            </a>

            {/* Login / Account */}
            <a
              href="/login"
              className="border-2 border-blue-900 text-blue-900 text-lg px-4 py-1 rounded-lg hover:bg-blue-900 hover:text-white transition-colors"
            >
              {isPending && !isError ? (
                <span className="invisible">Account</span>
              ) : user && user.email ? (
                "Account"
              ) : (
                "Login"
              )}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
