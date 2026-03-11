import { ChevronDown, MapPin, Menu, Newspaper, Users, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useCurrentUser } from "../hooks/user.hooks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  const { data: user, isPending, isError } = useCurrentUser();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => {
      const isScrolled = window.scrollY > 60;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  const loginLabel =
    isPending && !isError ? (
      <span className="invisible">Account</span>
    ) : user && user.email ? (
      "Account"
    ) : (
      "Login"
    );

  const isLight = transparent && !scrolled;

  return (
    <nav
      className={`${
        transparent ? "fixed top-0 left-0 right-0 z-50" : ""
      } transition-all duration-300 ${
        isLight
          ? "bg-transparent shadow-none"
          : "bg-gray-50 text-blue-900 shadow-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/">
            <img src="/URLogo.png" alt="Urban Refuge Logo" className="h-20 w-auto" />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className={`text-lg transition-colors ${
                isLight ? "text-white/90 hover:text-white" : "hover:text-blue-700"
              }`}
            >
              Home
            </a>

            {/* About dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center gap-1 text-lg transition-colors outline-none ${
                  isLight ? "text-white/90 hover:text-white" : "hover:text-blue-700"
                }`}
              >
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
              <DropdownMenuTrigger
                className={`flex items-center gap-1 text-lg transition-colors outline-none ${
                  isLight ? "text-white/90 hover:text-white" : "hover:text-blue-700"
                }`}
              >
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

            <a
              href="/contact"
              className={`text-lg transition-colors ${
                isLight ? "text-white/90 hover:text-white" : "hover:text-blue-700"
              }`}
            >
              Contact
            </a>

            <a
              href="/find"
              className="bg-amber-500 hover:bg-amber-600 text-white text-lg font-semibold px-5 py-2 rounded-lg transition-colors"
            >
              Find Resources
            </a>

            <a
              href="/login"
              className={`text-lg px-4 py-1 rounded-lg transition-colors border-2 ${
                isLight
                  ? "border-white/60 text-white hover:bg-white hover:text-blue-900"
                  : "border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
              }`}
            >
              {loginLabel}
            </a>
          </div>

          {/* Hamburger button (mobile) */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors ${
              isLight ? "hover:bg-white/20" : "hover:bg-gray-200"
            }`}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={`h-6 w-6 ${isLight ? "text-white" : ""}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isLight ? "text-white" : ""}`} />
            )}
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
            href="/contact"
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
