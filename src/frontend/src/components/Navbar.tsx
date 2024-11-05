const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-50 text-blue-900 shadow-md max-h-[7rem] h-[7rem]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-28">
          <div className="flex items-center space-x-4">
            <a href="/">
              <img
                src="/URLogo.png"
                alt="Urban Refuge Logo"
                className="h-16 w-auto"
              />
            </a>
          </div>

          {/* Navbar buttons */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-8 text-lg">
              <a href="/" className="hover:text-blue-700 transition-colors">
                Home
              </a>
            </div>

            <div className="flex items-center space-x-8 text-lg">
              <a
                href="/donate"
                className="hover:text-blue-700 transition-colors">
                Donate
              </a>
            </div>

            <div className="flex items-center text-lg">
              <a
                href="/login"
                className="border-2 border-blue-900 text-blue-900 px-4 py-1 rounded-lg hover:bg-blue-900 hover:text-white transition-colors">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
