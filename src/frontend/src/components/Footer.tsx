import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mail } from "lucide-react";
import React, { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:ceo@urbanrefugemap.org?subject=Suggestion from ${email}&body=${encodeURIComponent(
      suggestion,
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand + Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-lg font-bold mb-3">URBAN REFUGE</p>
            <p className="text-sm text-blue-200">152 Bay State Road</p>
            <p className="text-sm text-blue-200">Boston, MA 02215</p>
            <a
              href="mailto:ceo@urbanrefugemap.org"
              className="text-sm text-blue-200 hover:text-white mt-2 block"
            >
              ceo@urbanrefugemap.org
            </a>
            <div className="flex space-x-4 mt-5">
              <a
                href="mailto:ceo@urbanrefugemap.org"
                className="hover:text-blue-300 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/UrbanRefugeApp/"
                className="hover:text-blue-300 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/urbanrefugeapp"
                className="hover:text-blue-300 transition-colors"
                aria-label="Instagram"
              >
                <InstagramLogoIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/urban-refuge/"
                className="hover:text-blue-300 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInLogoIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-blue-200 hover:text-white text-sm transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/find"
                  className="text-blue-200 hover:text-white text-sm transition-colors"
                >
                  Find Resources
                </a>
              </li>
              <li>
                <a
                  href="/maps"
                  className="text-blue-200 hover:text-white text-sm transition-colors"
                >
                  Our Maps
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              About
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/team"
                  className="text-blue-200 hover:text-white text-sm transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className="text-blue-200 hover:text-white text-sm transition-colors"
                >
                  In the News
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-blue-200 hover:text-white text-sm transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Suggestion Form */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Submit a Suggestion
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
              <input
                type="email"
                className="px-3 py-2 rounded-md text-sm text-blue-900 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                className="px-3 py-2 rounded-md text-sm text-blue-900 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                placeholder="Your suggestion"
                rows={3}
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-xs text-blue-300">
            © 2026 Urban Refuge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
