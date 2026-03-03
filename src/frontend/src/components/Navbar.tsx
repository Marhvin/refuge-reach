import { ChevronDown, MapPin, Menu, Newspaper, Users, X } from "lucide-react";
import { useState } from "react";
import { useCurrentUser } from "../hooks/user.hooks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar: React.FC = () => {
  const { data: user, isPending, isError } = useCurrentUser();
  const [mobileOpen, setMobileOpen] = useState(false);

  const loginLabel =
    isPending && !isError ? (
      <span className="invisible">Account</span>
    ) : user && user.email ? (
      "Account"
    ) : (
      "Login"
    );

  return (
    <nav className="bg-gray-50 text-blue-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <a href="/">
            <img src="/URLogo.png" alt="Urban Refuge Logo" className="h-24 w-auto" />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-lg hover:text-blue-700 transition-colors">
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
                  <a href="/maps" className="flex items-center gap-2 cursor-pointer">
                    <MapPin className="h-4 w-4 text-amber-500" />
                    Our Maps
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/team" className="flex items-center gap-2 cursor-pointer">
                    <Users className="h-4 w-4 text-amber-500" />
                    Our Team
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
                  <a href="/news" className="flex items-center gap-2 cursor-pointer">
                    <Newspaper className="h-4 w-4 text-amber-500" />
                    In the News
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="/donate" className="text-lg hover:text-blue-700 transition-colors">
              Get Involved
            </a>

            <a
              href="/find"
              className="bg-amber-500 hover:bg-amber-600 text-white text-lg font-semibold px-5 py-2 rounded-lg transition-colors"
            >
              Find Resources
            </a>

            <a
              href="/login"
              className="border-2 border-blue-900 text-blue-900 text-lg px-4 py-1 rounded-lg hover:bg-blue-900 hover:text-white transition-colors"
            >
              {loginLabel}
            </a>
          </div>

          {/* Hamburger button (mobile) */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-200 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200 px-4 pb-4 flex flex-col space-y-3">
          <a
            href="/"
            className="text-lg hover:text-blue-700 transition-colors py-2"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </a>

          {/* About section */}
          <div className="flex flex-col space-y-1">
            <span className="text-lg font-medium text-blue-900">About</span>
            <a
              href="/maps"
              className="pl-4 flex items-center gap-2 text-base hover:text-blue-700 transition-colors py-1"
              onClick={() => setMobileOpen(false)}
            >
              <MapPin className="h-4 w-4 text-amber-500" />
              Our Maps
            </a>
            <a
              href="/team"
              className="pl-4 flex items-center gap-2 text-base hover:text-blue-700 transition-colors py-1"
              onClick={() => setMobileOpen(false)}
            >
              <Users className="h-4 w-4 text-amber-500" />
              Our Team
            </a>
          </div>

          {/* Media section */}
          <div className="flex flex-col space-y-1">
            <span className="text-lg font-medium text-blue-900">Media</span>
            <a
              href="/news"
              className="pl-4 flex items-center gap-2 text-base hover:text-blue-700 transition-colors py-1"
              onClick={() => setMobileOpen(false)}
            >
              <Newspaper className="h-4 w-4 text-amber-500" />
              In the News
            </a>
          </div>

          <a
            href="/donate"
            className="text-lg hover:text-blue-700 transition-colors py-2"
            onClick={() => setMobileOpen(false)}
          >
            Get Involved
          </a>

          <a
            href="/find"
            className="bg-amber-500 hover:bg-amber-600 text-white text-lg font-semibold px-5 py-2 rounded-lg transition-colors text-center"
            onClick={() => setMobileOpen(false)}
          >
            Find Resources
          </a>

          <a
            href="/login"
            className="border-2 border-blue-900 text-blue-900 text-lg px-4 py-1 rounded-lg hover:bg-blue-900 hover:text-white transition-colors text-center"
            onClick={() => setMobileOpen(false)}
          >
            {loginLabel}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
