import { Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:ceo@urbanrefuge.org?subject=Suggestion from ${email}&body=${encodeURIComponent(
      suggestion
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <p className="text-lg font-semibold mb-2">© 2024 URBAN REFUGE</p>
            <p>152 BAY STATE ROAD</p>
            <p>BOSTON, MA 02215</p>
            <a
              href="mailto:ceo@urbanrefuge.org"
              className="text-white font-bold hover:underline mt-4 block"
            >
              CEO@URBANREFUGE.ORG
            </a>
          </div>

          {/* Action Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Action</h3>
            <a href="/donate" className="text-white hover:underline block">
              Donate
            </a>
          </div>

          {/* Social Media Links and Suggestion Form */}
          <div className="flex flex-col items-start md:items-end">
            {/* Social Media Links */}
            <div className="flex space-x-6 mb-8">
              <a
                href="mailto:ceo@urbanrefuge.org"
                className="hover:text-gray-300"
                aria-label="Email"
              >
                <Mail className="text-white h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/UrbanRefugeApp/"
                className="hover:text-gray-300"
                aria-label="Facebook"
              >
                <Facebook className="text-white h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/urbanrefugeapp"
                className="hover:text-gray-300"
                aria-label="Instagram"
              >
                <Instagram className="text-white h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/urban-refuge/"
                className="hover:text-gray-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-white h-6 w-6" />
              </a>
            </div>

            {/* Suggestion Form in a Square Box */}
            <div className="bg-white text-blue-900 p-6 rounded-lg shadow-lg w-full max-w-md">
              <h3 className="text-lg font-bold mb-4">Submit a Suggestion</h3>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                  type="email"
                  className="px-4 py-2 rounded-lg border border-gray-300"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <textarea
                  className="px-4 py-2 rounded-lg border border-gray-300"
                  placeholder="Your Suggestion"
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit Suggestion
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
