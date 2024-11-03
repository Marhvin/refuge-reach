import { Navbar } from "../components/navbar";
import { Button } from "../components/ui/button";

export default function Donate() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col items-center gap-1 ">
        <div className="bg-blue-800 py-[30px] px-[450px] transform transition-transform">
          <div className="flex items-center justify-between gap-5">
            <img
              src="https://images.pexels.com/photos/10629451/pexels-photo-10629451.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Description"
              className="size-3/5 rounded-sm"
            />
            <p className=" text-white text-7xl font-bold">
              Donate today for a better tomorrow.
            </p>
          </div>
        </div>
        <Button className="text-2xl bg-blue-500 text-white hover:bg-blue-700 m-8">
          Donate to Urban Refuge
        </Button>
      </div>
    </>
  );
}

// container: {
//   maxWidth: "500px",
//   margin: "0 auto",
//   padding: "20px",
//   border: "1px solid #ddd",
//   borderRadius: "8px",
//   background: "#f9f9f9",
// }
