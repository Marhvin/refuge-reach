import { User } from "lucide-react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

// ── Types ──────────────────────────────────────────────────────────────────

interface ExecMember {
  role: string;
  name?: string;
  image?: string;
}

// ── Data ───────────────────────────────────────────────────────────────────

const execBoard: ExecMember[] = [
  {
    role: "Founding Director",
    name: "Professor Noora Lori",
    image: "/team/noora.webp",
  },
  {
    role: "Chief Executive Officer",
    name: "Daria Kosack",
    image: "/team/daria.png",
  },
  {
    role: "Technology Team Director",
    name: "Zora Browne",
    image: "/team/zora.png",
  },
  {
    role: "Res & Ops Team Director",
    name: "Katie Kunkle",
    image: "/team/katie.png",
  },
  {
    role: "Marketing Team Director",
    name: "Isabella Chaparro Will",
    image: "/team/isabella.png",
  },
  {
    role: "Business Team Director",
    name: "Sofia Echenique",
    image: "/team/sofia.png",
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────

function Avatar({
  name,
  image,
  size = "lg",
}: {
  name?: string;
  image?: string;
  size?: "sm" | "lg";
}) {
  const dim = size === "lg" ? "h-28 w-28" : "h-20 w-20";
  const iconDim = size === "lg" ? "h-12 w-12" : "h-9 w-9";

  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className={`${dim} rounded-full object-cover ring-4 ring-white shadow-md`}
      />
    );
  }

  if (name) {
    const initials = name
      .split(" ")
      .slice(0, 2)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
    return (
      <div
        className={`${dim} rounded-full bg-blue-100 ring-4 ring-white shadow-md flex items-center justify-center`}
      >
        <span className="text-blue-700 font-bold text-xl">{initials}</span>
      </div>
    );
  }

  return (
    <div
      className={`${dim} rounded-full bg-slate-100 ring-4 ring-white shadow-md flex items-center justify-center`}
    >
      <User className={`${iconDim} text-slate-400`} />
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function Team() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-blue-800 py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-amber-400 font-semibold mb-4">
            The People Behind the Mission
          </p>
          <h1 className="text-5xl font-bold text-white mb-6">Our Team</h1>
          <p className="text-lg text-white/85 leading-relaxed">
            From a BU incubator course in 2016 to a growing global platform —
            Urban Refuge is powered by generations of students, alumni, and
            faculty united by one goal: putting aid on the map.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-10">
            <p className="text-xs tracking-widest uppercase text-amber-600 font-semibold mb-3">
              How It All Started
            </p>
            <h2 className="text-3xl font-bold text-blue-800">Our Story</h2>
          </div>
          <div className="bg-slate-50 rounded-2xl p-10 border border-blue-50 space-y-5 text-blue-800/80 text-lg leading-relaxed">
            <p>
              Urban Refuge was founded in{" "}
              <span className="font-semibold text-blue-800">2016</span> as part
              of an incubator class at Boston University. The goal of the
              founding class was to map aid for displaced and underserved
              populations in{" "}
              <span className="font-semibold text-blue-800">Amman, Jordan</span>{" "}
              using an open-source app that they can access free of charge.
            </p>
            <p>
              Since then,{" "}
              <span className="font-semibold text-blue-800">
                three female-led executive boards
              </span>{" "}
              have worked to expand the reach of our app — putting aid on the
              map for vulnerable populations all over the world.
            </p>
            <p>
              Urban Refuge is a living project: old members hand the torch to
              new ones, alumni stay connected, and each cohort leaves the app
              stronger than they found it. It is a testament to what a small,
              passionate team can build when driven by curiosity, collaboration,
              community, and commitment.
            </p>
          </div>
        </div>

        {/* Journey timeline chips */}
        <div className="flex flex-nowrap justify-center gap-4 mt-10 px-8">
          {[
            { year: "2016", label: "Founded at BU — Jordan focus" },
            { year: "2018", label: "Expanded to Istanbul" },
            { year: "2022", label: "Boston & US cities" },
            { year: "2024", label: "Continued global growth" },
          ].map(({ year, label }) => (
            <div
              key={year}
              className="flex items-center gap-3 bg-blue-800 text-white rounded-full px-5 py-2 text-sm shrink-0 whitespace-nowrap"
            >
              <span className="font-bold text-amber-400">{year}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Executive Board */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-14">
            <p className="text-xs tracking-widest uppercase text-amber-600 font-semibold mb-3">
              Leadership
            </p>
            <h2 className="text-3xl font-bold text-blue-800 mb-3">
              Executive Board
            </h2>
            <p className="text-blue-800/70 max-w-xl mx-auto">
              Urban Refuge is run by a team of entrepreneurs who have dedicated
              themselves to social good and innovative entrepreneurship.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {execBoard.map((member) => (
              <div
                key={member.role}
                className="bg-white rounded-2xl shadow-sm border border-blue-50 p-6 flex flex-col items-center text-center"
              >
                <Avatar name={member.name} image={member.image} size="lg" />
                <p className="mt-5 font-bold text-blue-800 text-base">
                  {member.name ?? (
                    <span className="text-blue-300 italic">Coming Soon</span>
                  )}
                </p>
                <p className="text-xs tracking-widest uppercase text-amber-600 font-semibold mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-800 py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-white/90 text-xl leading-relaxed italic mb-6">
            "The ultimate goal is helping people."
          </p>
          <p className="text-amber-400 font-semibold text-sm tracking-wide uppercase mb-8">
            — Noora Lori, Founder
          </p>
          <a
            href="/find"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Find Resources
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
