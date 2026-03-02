import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const LAUNCHED_CITIES = [
  {
    name: "Istanbul",
    country: "Türkiye",
    coordinates: [28.9784, 41.0082] as [number, number],
    status: "launched" as const,
  },
  {
    name: "San Jose",
    country: "CA, USA",
    coordinates: [-121.8863, 37.3382] as [number, number],
    status: "launched" as const,
  },
  {
    name: "Westchester",
    country: "NY, USA",
    coordinates: [-73.7949, 41.122] as [number, number],
    status: "launched" as const,
  },
  {
    name: "Boston",
    country: "MA, USA",
    coordinates: [-71.0589, 42.3601] as [number, number],
    status: "launched" as const,
  },
];

export default function Maps() {
  const [tooltip, setTooltip] = useState<{
    name: string;
    country: string;
    x: number;
    y: number;
  } | null>(null);

  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-blue-800 py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-amber-400 font-semibold mb-4">
            Global Reach
          </p>
          <h1 className="text-5xl font-bold text-white mb-6">
            The Urban Refuge Maps
          </h1>
          <p className="text-lg text-white/85 leading-relaxed">
            Urban Refuge is designed for migrant and refugee populations that
            call large global cities home, and for the organizations that
            provide aid resources to them.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-xs tracking-widest uppercase text-amber-600 font-semibold mb-3">
            How It Works
          </p>
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Find Aid Near You
          </h2>
          <p className="text-blue-800/80 text-lg leading-relaxed mb-8">
            Simply select the kind of aid you're looking for — Health,
            Education, Job Resources, or Legal Services — and find dozens of aid
            organizations pinpointed on the map. Every organization has been
            researched and vetted to be trustworthy.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: "Health", color: "bg-red-100 text-red-700" },
              { label: "Education", color: "bg-green-100 text-green-700" },
              { label: "Job Resources", color: "bg-blue-100 text-blue-700" },
              { label: "Legal Services", color: "bg-amber-100 text-amber-700" },
            ].map(({ label, color }) => (
              <div
                key={label}
                className={`${color} rounded-xl py-4 px-6 font-semibold text-sm`}
              >
                {label}
              </div>
            ))}
          </div>
          <p className="text-blue-800/60 text-sm mt-6 italic">
            No login required. We do not collect or store any data, nor do we
            track your location at any time.
          </p>
        </div>
      </section>

      {/* World Map */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-10">
            <p className="text-xs tracking-widest uppercase text-amber-600 font-semibold mb-3">
              Our Coverage
            </p>
            <h2 className="text-3xl font-bold text-blue-800">
              Where We've Launched
            </h2>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-amber-500" />
              <span className="text-sm text-blue-800/70">Active City</span>
            </div>
          </div>

          <div
            className="relative rounded-2xl overflow-hidden shadow-lg border border-blue-100"
            style={{ background: "#e8f0fe" }}
          >
            <ComposableMap
              projection="geoNaturalEarth1"
              style={{ width: "100%", height: "auto" }}
            >
              <ZoomableGroup zoom={1}>
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#bfdbfe"
                        stroke="#93c5fd"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { fill: "#93c5fd", outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {LAUNCHED_CITIES.map((city) => (
                  <Marker
                    key={city.name}
                    coordinates={city.coordinates}
                    onMouseEnter={(e) => {
                      const svg = (
                        e.target as SVGElement
                      ).closest("svg")!.getBoundingClientRect();
                      setTooltip({
                        name: city.name,
                        country: city.country,
                        x: e.clientX - svg.left,
                        y: e.clientY - svg.top,
                      });
                    }}
                    onMouseLeave={() => setTooltip(null)}
                    style={{ cursor: "pointer" }}
                  >
                    {/* Pulse ring */}
                    <circle r={10} fill="#f59e0b" opacity={0.25} />
                    {/* Pin dot */}
                    <circle r={5} fill="#f59e0b" stroke="#fff" strokeWidth={1.5} />
                  </Marker>
                ))}
              </ZoomableGroup>
            </ComposableMap>

            {/* Tooltip */}
            {tooltip && (
              <div
                className="absolute pointer-events-none bg-blue-900 text-white text-xs rounded-lg px-3 py-2 shadow-lg"
                style={{
                  left: tooltip.x + 12,
                  top: tooltip.y - 36,
                  whiteSpace: "nowrap",
                }}
              >
                <p className="font-bold">{tooltip.name}</p>
                <p className="text-white/70">{tooltip.country}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* City Listings */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Currently Mapped */}
            <div>
              <p className="text-xs tracking-widest uppercase text-amber-600 font-semibold mb-3">
                Live Now
              </p>
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                Currently Mapped
              </h2>
              <div className="space-y-3">
                {LAUNCHED_CITIES.map((city) => (
                  <div
                    key={city.name}
                    className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-sm border border-blue-50"
                  >
                    <span className="bg-amber-100 p-2 rounded-full">
                      <MapPin className="h-4 w-4 text-amber-600" />
                    </span>
                    <div>
                      <p className="font-bold text-blue-800">{city.name}</p>
                      <p className="text-sm text-blue-800/60">{city.country}</p>
                    </div>
                    <span className="ml-auto text-xs bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">
                      Active
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coming Soon */}
            <div>
              <p className="text-xs tracking-widest uppercase text-blue-400 font-semibold mb-3">
                Expanding
              </p>
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                Coming Soon
              </h2>
              <div className="bg-white rounded-xl px-8 py-10 shadow-sm border border-blue-50 text-center">
                <div className="text-4xl mb-4">🌍</div>
                <p className="text-blue-800/70 text-lg font-medium mb-2">
                  New cities are being mapped.
                </p>
                <p className="text-blue-800/50 text-sm leading-relaxed">
                  Urban Refuge is actively researching and vetting organizations
                  in new cities around the world. Stay tuned for updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy reminder */}
      <section className="bg-blue-800 py-10 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-white/90 text-base leading-relaxed">
            <span className="font-bold text-amber-400">
              Your privacy is protected.
            </span>{" "}
            No login is required and we do not collect or store any data, nor do
            we track your location at any time. You cannot be tracked or
            targeted through this app.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
