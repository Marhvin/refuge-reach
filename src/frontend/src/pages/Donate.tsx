import { ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

const DONATION_URL =
  "https://give.bu.edu/campaigns/56410/donations/new?designation=9300011061";

export default function Donate() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-blue-800 py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-amber-400 font-semibold mb-4">
            Support Urban Refuge
          </p>
          <h1 className="text-5xl font-bold text-white mb-6">
            Put Aid on the Map
          </h1>
          <p className="text-lg text-white/85 leading-relaxed">
            Every gift empowers our mission — turning displacement into
            direction for the communities we serve.
          </p>
        </div>
      </section>

      {/* Donate split */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8 items-stretch">
            {/* Left: mission blurb */}
            <div className="md:col-span-3 bg-slate-50 rounded-2xl border border-blue-50 p-10 space-y-5">
              <h2 className="text-3xl font-bold text-blue-800 leading-tight">
                A platform built for impact
              </h2>
              <p className="text-blue-800/80 leading-relaxed">
                Urban Refuge is a student-led humanitarian tech initiative at
                Boston University, making aid and resources more accessible for
                displaced and underserved communities. What began as a classroom
                project has grown into a platform that maps verified social
                services around the world. Every dollar helps us turn
                displacement into direction.
              </p>
            </div>

            {/* Right: CTA */}
            <div className="md:col-span-2 bg-blue-800 rounded-2xl p-10 flex flex-col justify-center text-white relative overflow-hidden">
              <div
                className="absolute -top-10 -right-10 h-40 w-40 rounded-full opacity-20"
                style={{ backgroundColor: "#f59e0b" }}
              />
              <div className="relative">
                <p className="text-xs tracking-widest uppercase text-amber-400 font-semibold mb-3">
                  Give Today
                </p>
                <h3 className="text-3xl font-bold mb-4 leading-tight">
                  Ready to give?
                </h3>
                <p className="text-white/80 mb-8 leading-relaxed">
                  Donate securely through Boston University.
                </p>
                <a
                  href={DONATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-lg shadow-amber-500/20"
                >
                  Donate Now
                  <ExternalLink className="h-5 w-5" />
                </a>
                <p className="text-white/60 text-sm mt-4">
                  Questions?{" "}
                  <a
                    href="mailto:give2bu@bu.edu"
                    className="underline hover:text-white"
                  >
                    give2bu@bu.edu
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
