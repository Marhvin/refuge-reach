import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { Button } from "../components/ui/button";

export default function Donate() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="flex flex-col items-center gap-1 ">
          <div className="bg-blue-800 py-[30px] px-[450px] transform transition-transform">
            <div className="flex items-center justify-betwee gap-5">
              <img
                src="https://images.pexels.com/photos/10629451/pexels-photo-10629451.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Description"
                className="size-3/5 rounded-lg pr-8"
              />
              <div className="flex-1">
                <p className=" text-white text-7xl font-bold pb-12">
                  Donate today for a better tomorrow.
                </p>
                <Button className="text-lg bg-yellow-400 text-blue-800 font-semibold hover:bg-yellow-500 transition-colors px-8 py-8 rounded-lg shadow-lg hover:shadow-xl">
                  Donate to Urban Refuge
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
