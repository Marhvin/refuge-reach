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

type CityStatus = "active" | "inactive" | "coming-soon";

type City = {
  name: string;
  country: string;
  coordinates: [number, number];
  status: CityStatus;
};

const CITIES: City[] = [
  {
    name: "Boston",
    country: "MA, USA",
    coordinates: [-71.0589, 42.3601],
    status: "active",
  },
  {
    name: "San Jose",
    country: "CA, USA",
    coordinates: [-121.8863, 37.3382],
    status: "inactive",
  },
  {
    name: "Westchester",
    country: "NY, USA",
    coordinates: [-73.7949, 41.1220],
    status: "inactive",
  },
  {
    name: "Beirut",
    country: "Lebanon",
    coordinates: [35.5018, 33.8938],
    status: "inactive",
  },
  {
    name: "Istanbul",
    country: "Turkey",
    coordinates: [28.9784, 41.0082],
    status: "inactive",
  },
  {
    name: "Cairo",
    country: "Egypt",
    coordinates: [31.2357, 30.0444],
    status: "inactive",
  },
  {
    name: "Sydney",
    country: "Australia",
    coordinates: [151.2093, -33.8688],
    status: "coming-soon",
  },
];

const STATUS_COLORS: Record<CityStatus, { fill: string; label: string }> = {
  active: { fill: "#16a34a", label: "Active" },
  inactive: { fill: "#9ca3af", label: "Inactive" },
  "coming-soon": { fill: "#f59e0b", label: "Coming Soon" },
};

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
            Urban Refuge is designed for displaced and underserved populations
            that call large global cities home, and for the organizations that
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

      {/* Map + City Listings side by side */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-10">
            <p className="text-xs tracking-widest uppercase text-amber-600 font-semibold mb-3">
              Our Coverage
            </p>
            <h2 className="text-3xl font-bold text-blue-800">
              Where We've Launched
            </h2>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-6">
            {(Object.keys(STATUS_COLORS) as CityStatus[]).map((status) => (
              <div key={status} className="flex items-center gap-2">
                <span
                  className="inline-block w-3 h-3 rounded-full"
                  style={{ backgroundColor: STATUS_COLORS[status].fill }}
                />
                <span className="text-sm text-blue-800/70">
                  {STATUS_COLORS[status].label}
                </span>
              </div>
            ))}
          </div>

          {/* Map — full width */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-lg border border-blue-100 mb-16"
            style={{ background: "#e8f0fe" }}
          >
            <ComposableMap
              projection="geoNaturalEarth1"
              style={{ width: "100%", height: "auto" }}
            >
              <ZoomableGroup zoom={1}>
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies
                      .filter((geo) => geo.id !== "010")
                      .map((geo) => (
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

                {CITIES.map((city) => {
                  const color = STATUS_COLORS[city.status].fill;
                  return (
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
                      {city.status === "active" && (
                        <circle r={10} fill={color} opacity={0.25} />
                      )}
                      <circle r={5} fill={color} stroke="#fff" strokeWidth={1.5} />
                    </Marker>
                  );
                })}
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

          {/* City Listings — 3 columns below map */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {(
              [
                {
                  status: "active",
                  eyebrow: "Live Now",
                  heading: "Currently Mapped",
                  badgeClass: "bg-green-100 text-green-700",
                  iconWrapClass: "bg-green-100",
                  iconClass: "text-green-700",
                  eyebrowClass: "text-amber-600",
                },
                {
                  status: "inactive",
                  eyebrow: "Previously Mapped",
                  heading: "Inactive Cities",
                  badgeClass: "bg-gray-100 text-gray-600",
                  iconWrapClass: "bg-gray-100",
                  iconClass: "text-gray-500",
                  eyebrowClass: "text-gray-500",
                },
                {
                  status: "coming-soon",
                  eyebrow: "Expanding",
                  heading: "Coming Soon",
                  badgeClass: "bg-amber-100 text-amber-700",
                  iconWrapClass: "bg-amber-100",
                  iconClass: "text-amber-600",
                  eyebrowClass: "text-blue-400",
                },
              ] as const
            ).map((group) => {
              const cities = CITIES.filter((c) => c.status === group.status);
              if (cities.length === 0) return null;
              return (
                <div key={group.status}>
                  <p
                    className={`text-xs tracking-widest uppercase font-semibold mb-3 ${group.eyebrowClass}`}
                  >
                    {group.eyebrow}
                  </p>
                  <h2 className="text-2xl font-bold text-blue-800 mb-4">
                    {group.heading}
                  </h2>
                  <div className="space-y-3">
                    {cities.map((city) => (
                      <div
                        key={city.name}
                        className="flex items-center gap-4 bg-slate-50 rounded-xl px-5 py-4 shadow-sm border border-blue-50"
                      >
                        <span
                          className={`p-2 rounded-full ${group.iconWrapClass}`}
                        >
                          <MapPin className={`h-4 w-4 ${group.iconClass}`} />
                        </span>
                        <div>
                          <p className="font-bold text-blue-800">
                            {city.name}
                          </p>
                          <p className="text-sm text-blue-800/60">
                            {city.country}
                          </p>
                        </div>
                        <span
                          className={`ml-auto text-xs font-semibold px-3 py-1 rounded-full ${group.badgeClass}`}
                        >
                          {STATUS_COLORS[city.status].label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
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
