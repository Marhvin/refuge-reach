import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

export default function Donate() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 ">
      <div className="bg-blue-500 text-white text-7xl font-bold py-[120px] px-[450px] rounded-lg transform transition-transform">
        Donate today for a better tomorrow.
      </div>
      <Button className="text-2xl">Donate to Urban Refuge</Button>
      <h1>Questions about your donation? Visit our FAQ page.</h1>
    </div>
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
