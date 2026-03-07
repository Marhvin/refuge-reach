import { useState, useEffect } from "react";
import { ArrowRight, Heart, Users, MapPin } from "lucide-react";
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
    <main className="bg-white overflow-hidden">
      <Navbar transparent />

      {/* Hero — full-screen, bottom-anchored editorial layout */}
      <section className="relative h-screen min-h-[700px] flex items-end pb-24">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.squarespace-cdn.com/content/v1/573c78072eeb81d0d869605e/1582507523282-TTGYUS5RZUUVDL575VED/image-asset.jpeg?format=2500w')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />

        <div
          className={`relative z-10 max-w-7xl mx-auto px-8 w-full transition-all duration-1000 ease-out ${
            heroLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <div className="max-w-2xl">
            <p className="text-amber-400 text-xs tracking-[0.3em] uppercase font-semibold mb-6">
              Putting Aid on the Map
            </p>
            <h1 className="text-8xl font-bold text-white leading-none mb-6 tracking-tight">
              Urban
              <br />
              Refuge
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-md">
              Connecting displaced people with vital resources in their
              communities.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="/find"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 text-sm tracking-wide"
              >
                Find Resources <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/maps"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white border border-white/30 hover:border-white/60 px-7 py-3.5 rounded-full transition-all duration-200 text-sm tracking-wide"
              >
                View Maps
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* The Challenge */}
      <section className="bg-blue-950 py-28">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-semibold mb-16">
            As of the end of 2024
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div>
              <p
                className="text-white font-bold leading-none"
                style={{
                  fontSize: "clamp(4rem, 11vw, 8rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                123.2M
              </p>
              <p className="text-white/50 text-2xl font-semibold mt-3 tracking-wide uppercase">
                People
              </p>
            </div>
            <div className="md:pb-4">
              <div className="w-12 h-px bg-white/20 mb-8" />
              <p className="text-white/70 text-xl leading-relaxed">
                were forced to flee their homes globally due to persecution,
                conflict, violence, human rights violations or events seriously
                disturbing public order.
              </p>
              <a
                href="/maps"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium text-sm mt-8 transition-colors border-b border-amber-400/40 hover:border-amber-300 pb-1"
              >
                See how we help <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission — split with decorative offset */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img
              src="/news/urteam.jpeg"
              alt="Urban Refuge in action"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-5 -right-5 w-36 h-36 bg-amber-400 rounded-2xl -z-0" />
          </div>
          <div>
            <p className="text-amber-600 text-xs tracking-[0.3em] uppercase font-semibold mb-6">
              Our Purpose
            </p>
            <h2 className="text-5xl font-bold text-blue-950 leading-tight mb-6">
              Our Mission
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Urban Refuge is dedicated to providing up-to-date information on
              aid resources for refugees in urban areas. Our platform allows
              users to easily locate and access vital services while also
              contributing to the growing network of support.
            </p>
            <a
              href="/find"
              className="inline-flex items-center gap-2 bg-blue-950 hover:bg-blue-900 text-white font-medium px-7 py-3.5 rounded-full text-sm transition-colors"
            >
              Find Resources <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-slate-50 py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="text-amber-600 text-xs tracking-[0.3em] uppercase font-semibold mb-4">
                Our Services
              </p>
              <h2 className="text-5xl font-bold text-blue-950 leading-tight">
                What We Do
              </h2>
            </div>
            <a
              href="/find"
              className="inline-flex items-center gap-2 text-blue-950/60 hover:text-blue-950 text-sm transition-colors border-b border-blue-950/20 hover:border-blue-950 pb-1"
            >
              Find resources <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <MapPin className="h-5 w-5" />,
                accent: "bg-red-50 text-red-500",
                title: "Locate Aid",
                desc: "Our platform provides displaced people with access to nearby resources, including food banks, shelters, and medical clinics.",
              },
              {
                icon: <Users className="h-5 w-5" />,
                accent: "bg-emerald-50 text-emerald-600",
                title: "Community Support",
                desc: "We help displaced individuals integrate into local communities by connecting them to support networks that foster inclusivity.",
              },
              {
                icon: <Heart className="h-5 w-5" />,
                accent: "bg-blue-50 text-blue-600",
                title: "Contribute",
                desc: "We provide ways for individuals and organizations to assist displaced populations by adding resources or volunteering.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-8 border border-slate-100 hover:border-slate-200 hover:shadow-2xl transition-all duration-300 rounded-2xl"
              >
                <div
                  className={`inline-flex p-3 rounded-xl mb-6 ${item.accent}`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-amber-600 text-xs tracking-[0.3em] uppercase font-semibold mb-6">
              Our Team
            </p>
            <h2 className="text-5xl font-bold text-blue-950 leading-tight mb-6">
              Who We Are
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Urban Refuge is a dedicated team committed to making aid
              accessible for refugees. Our mission is to bridge the gap between
              refugees and the resources they need to thrive in urban
              environments.
            </p>
            <a
              href="/team"
              className="inline-flex items-center gap-2 text-blue-950 hover:text-blue-700 font-medium text-sm transition-colors border-b border-blue-950/30 hover:border-blue-700 pb-1"
            >
              Meet the team <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <LazyLoad>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video className="w-full h-auto" controls>
                <source src="/UrbanRefuge_mid.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </LazyLoad>
        </div>
      </section>

      {/* Our Impact */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-14">
            <p className="text-xs tracking-widest uppercase text-amber-600 font-semibold mb-3">
              By the Numbers
            </p>
            <h2 className="text-4xl font-bold text-blue-800">Our Impact</h2>
          </div>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-blue-100">
            <div className="flex flex-col items-center text-center px-8 py-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-6xl font-bold text-blue-800">10</span>
                <span className="text-3xl font-bold text-blue-800">Years</span>
              </div>
              <p className="text-xs tracking-widest uppercase text-amber-600 font-semibold mb-3">
                of research behind the map
              </p>
              <p className="text-blue-800/75 leading-relaxed">
                Urban Refuge began in 2016 from an incubator course at Boston
                University.
              </p>
            </div>
            <div className="flex flex-col items-center text-center px-8 py-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-6xl font-bold text-blue-800">5</span>
                <span className="text-3xl font-bold text-blue-800">Cities</span>
              </div>
              <p className="text-xs tracking-widest uppercase text-amber-600 font-semibold mb-3">
                mapped
              </p>
              <p className="text-blue-800/75 leading-relaxed">
                With Urban Refuge set to arrive in other parts of the world
                soon.
              </p>
            </div>
            <div className="flex flex-col items-center text-center px-8 py-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-6xl font-bold text-blue-800">3</span>
                <span className="text-3xl font-bold text-blue-800">
                  Generations
                </span>
              </div>
              <p className="text-xs tracking-widest uppercase text-amber-600 font-semibold mb-3">
                of woman-led boards
              </p>
              <p className="text-blue-800/75 leading-relaxed">
                A team and tool that prioritizes diversity and inclusivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy — compact note */}
      <section className="bg-slate-50 py-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
          <p className="text-slate-500 text-xs tracking-[0.25em] uppercase font-semibold shrink-0">
            Your Privacy
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              "We never collect or store user data.",
              "We never collect or store user locations.",
              "Your identity will be kept 100% safe.",
              "All information is collected from public sources.",
            ].map((item) => (
              <span key={item} className="text-slate-400 text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
