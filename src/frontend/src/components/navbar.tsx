export function Navbar() {
  return (
    <nav className="bg-gray-50 text-blue-900 shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-28">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <a href="/">
              <img
                src="/URLogo.png"
                alt="Urban Refuge Logo"
                className="h-16 w-auto" // Adjusted for better aspect ratio and scaling
              />
            </a>
          </div>

          {/* Links and Donate Button Section */}
          <div className="flex items-center space-x-8">
            {/* Links Section */}
            <div className="flex items-center space-x-8 text-lg">
              <a href="/" className="hover:text-blue-700 transition-colors">
                Home
              </a>
            </div>

            {/* Donate Button Section */}
            <div>
              <a
                href="/donate"
                className="border-2 border-blue-900 text-blue-900 px-4 py-2 rounded-lg hover:bg-blue-900 hover:text-white transition-colors"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
