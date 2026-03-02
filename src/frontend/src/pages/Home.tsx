import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import {
  ArrowRight,
  Heart,
  Users,
  MapPin,
  Target,
  EyeOff,
  Check,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import LazyLoad from "react-lazy-load";

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className={`relative text-center py-48 transition-all duration-1000 ease-in-out ${
          heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          backgroundImage:
            "url('https://images.squarespace-cdn.com/content/v1/573c78072eeb81d0d869605e/1582507523282-TTGYUS5RZUUVDL575VED/image-asset.jpeg?format=2500w')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-55" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-amber-400 font-semibold mb-4">
            Putting Aid on the Map
          </p>
          <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
            Urban Refuge
          </h1>
          <p className="text-xl mb-10 text-white/90 max-w-xl mx-auto leading-relaxed">
            Connecting displaced people with vital resources in their
            communities.
          </p>
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-white px-8"
          >
            <a href="/find" className="flex items-center">
              Find Resources <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-14">
            <p className="text-xs tracking-widest uppercase text-amber-600 font-semibold mb-3">
              Our Services
            </p>
            <h2 className="text-4xl font-bold text-blue-800">What We Do</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center justify-center aspect-square rounded-full bg-white shadow-md hover:shadow-lg transition-shadow p-12 text-center">
              <div className="bg-red-50 p-4 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-800">
                Locate Aid
              </h3>
              <p className="text-sm text-blue-800/75 leading-relaxed">
                Our platform provides displaced people with access to nearby
                resources, including food banks, shelters, and medical clinics.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center aspect-square rounded-full bg-white shadow-md hover:shadow-lg transition-shadow p-12 text-center">
              <div className="bg-green-50 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-800">
                Community Support
              </h3>
              <p className="text-sm text-blue-800/75 leading-relaxed">
                We help displaced individuals integrate into local communities
                by connecting them to support networks that foster inclusivity.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center aspect-square rounded-full bg-white shadow-md hover:shadow-lg transition-shadow p-12 text-center">
              <div className="bg-blue-50 p-4 rounded-full mb-4">
                <Heart className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-800">
                Contribute
              </h3>
              <p className="text-sm text-blue-800/75 leading-relaxed">
                We provide ways for individuals and organizations to assist
                displaced populations by adding resources or volunteering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <img
            src="/stock.jpg"
            alt="Stock Image"
            className="w-full h-72 object-cover rounded-xl shadow-lg"
          />
          <div>
            <p className="text-xs tracking-widest uppercase text-amber-600 font-semibold mb-3">
              Our Purpose
            </p>
            <h2 className="text-3xl font-bold mb-6 text-blue-800 flex items-center gap-3">
              Our Mission
              <Target className="h-7 w-7 text-amber-500 shrink-0" />
            </h2>
            <p className="text-lg text-blue-800/80 leading-relaxed">
              Urban Refuge is dedicated to providing up-to-date information on
              aid resources for refugees in urban areas. Our platform allows
              users to easily locate and access vital services while also
              contributing to the growing network of support.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-widest uppercase text-amber-600 font-semibold mb-3">
              Our Team
            </p>
            <h2 className="text-3xl font-bold mb-6 text-blue-800 flex items-center gap-3">
              Who We Are
              <Users className="h-7 w-7 text-amber-500 shrink-0" />
            </h2>
            <p className="text-lg text-blue-800/80 leading-relaxed">
              Urban Refuge is a dedicated team committed to making aid
              accessible for refugees. Our mission is to bridge the gap between
              refugees and the resources they need to thrive in urban
              environments.
            </p>
          </div>
          <LazyLoad>
            <video
              className="w-full h-auto rounded-xl shadow-lg"
              controls
              poster="https://via.placeholder.com/800x450.png?text=Who+We+Are"
            >
              <source src="/UrbanRefuge_mid.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </LazyLoad>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="bg-blue-800 py-20">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-widest uppercase text-amber-400 font-semibold mb-3">
              Your Safety
            </p>
            <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
              Our Commitment to Privacy
              <EyeOff className="h-7 w-7 text-amber-400 shrink-0" />
            </h2>
            <ul className="space-y-4">
              {[
                "We never collect or store user data.",
                "We never collect or store user locations.",
                "Your identity will be kept 100% safe.",
                "All information is collected from public sources.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-white/90 text-lg"
                >
                  <span className="bg-amber-500 rounded-full p-1 shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <img
            src="/city.jpg"
            alt="City Image"
            className="w-full h-72 object-cover rounded-xl shadow-xl opacity-80"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
