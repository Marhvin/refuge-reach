import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";

export default function Donate() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="flex flex-col items-start justify-center">
          <div className="bg-blue-800 py-[30px] px-[350px] transform transition-transform w-full">
            <div className="flex items-center gap-16">
              <img
                src="https://images.pexels.com/photos/10629451/pexels-photo-10629451.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Description"
                className="w-1/3 rounded-lg"
              />
              <div className="flex-1">
                <p className=" text-white text-7xl font-bold pb-12">
                  Donate today for a <u>better</u> tomorrow.
                </p>
                <Button className="text-lg bg-yellow-400 text-blue-800 font-semibold hover:bg-yellow-500 transition-colors px-5 py-5 -mt-16 rounded-lg shadow-lg hover:shadow-xl">
                  <a href={import.meta.env.VITE_DONATION_URL}>
                    Donate to Urban Refuge
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
