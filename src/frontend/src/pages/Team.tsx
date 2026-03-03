import { User } from "lucide-react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

// ── Types ──────────────────────────────────────────────────────────────────

interface BoardMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

interface ExecMember {
  role: string;
  name?: string;
  image?: string;
}

// ── Data ───────────────────────────────────────────────────────────────────

const execBoard: ExecMember[] = [
  { role: "Chief Executive Officer" },
  { role: "Chief Technology Officer" },
  { role: "Chief Operations Officer" },
  { role: "Chief Marketing Officer" },
];

const boardOfDirectors: BoardMember[] = [
  {
    name: "Noora Lori",
    role: "Associate Professor of International Relations at Boston University · Founding Director",
    image: "/team/noora.webp",
    bio: "Noora Lori is an Assistant Professor of International Relations at the Pardee School of Global Studies, Boston University. Her first book Offshore Citizens: Permanent 'Temporary' Status in the Gulf (Cambridge University Press 2019) examines the citizenship and migration policies of the United Arab Emirates, where non-citizens make up 90 percent of the population. She has published in the Oxford Handbook on Citizenship, the Asian and Pacific Migration Journal, the Journal of Politics & Society, and for the Institut français des relations internationals (IFRI). She is the Founding Director of the Pardee School Initiative on Forced Migration and Human Trafficking. At BU she received the Gitner Family Prize for Faculty Excellence (2014) and the CAS Templeton Award for Excellence in Student Advising (2015). She was previously an Academy Scholar at the Harvard Academy for International and Area Studies and a fellow at the International Security Program of the Harvard Kennedy School. She received her PhD in Political Science from Johns Hopkins University (2013).",
  },
  {
    name: "Raina Kadavil",
    role: "President",
    image: "/team/raina.webp",
    bio: "Raina Kadavil serves as the President of the Urban Refuge Board of Directors. She works as a Manager at Mastercard's Center for Inclusive Growth, overseeing the company's CSR platform and data analysis, and supporting the company's disaster response and STEM programming. She graduated from Boston University in 2019 with a BA in International Relations and from Johns Hopkins Carey Business School in 2023 with an MBA in Marketing and Product Management. She served as CEO of Urban Refuge from 2018-2024 and previously founded and ran two other organizations, Global Ambassadors (2008-2015) and Students for the United Nations (2018-2019). She currently serves on the Board of Directors of the United Nations Association of Westchester and is the founder of the 'It\\'s Her Time' College Scholarship for young women in leadership and service. An avid traveler, she has visited 55 countries and has worked in the United Nations as well as London, Sydney, and Beijing.",
  },
  {
    name: "Taylor Resteghini",
    role: "Founding Team Member",
    image: "/team/taylor.webp",
    bio: "Taylor Resteghini is a founding team member of Urban Refuge, having contributed to the initial research, fundraising, and outreach efforts for the app. She is currently a Photo Researcher working in education publishing, where she procures photography for digital education lessons designed to enhance student achievement. As an international relations major at Boston University, Taylor interned with non-profits and NGOs in Boston, Rabat, and Geneva, working on a range of issues from refugee resettlement, to women's empowerment, to US foreign policy advocacy. Her passions lie in education, human rights, and healthcare accessibility.",
  },
  {
    name: "Vicky Kelberer",
    role: "Co-Founder · First CEO",
    image: "/team/vicky.webp",
    bio: "Vicky Kelberer is a dual graduate from Boston University's Pardee School of Global Studies, with a BA and MA in International Relations. She was a founding member and Graduate Chair of the Initiative on Forced Migration and Human Trafficking, and served as a graduate teaching assistant for the Urban Refuge course and the app's first CEO. Vicky has worked in migration research and policy, higher education administration, non-profit development and strategy, and currently leads the Research and Strategy Group at one of the largest non-profit grantmakers in the US.",
  },
  {
    name: "Evelyn (Ellie) Hitt",
    role: "Co-Founder",
    image: "/team/evelyn.webp",
    bio: "Evelyn (Ellie) Hitt is the Executive Coordinator for Ambassador Samantha Power who was the United States Ambassador to the United Nations from 2013–2017. She received her B.A. in International Relations from Boston University where she was involved in the Community Service Center as a Program Manager for the Alternative Service Breaks Program and was one of the founders of Urban Refuge. She joined the Belfer Center at Harvard Kennedy School after working for two years as a Refugee Career Coach at Jewish Vocational Service.",
  },
  {
    name: "Meaghan Delaney",
    role: "Co-Founder",
    image: "/team/meaghan.webp",
    bio: "Meaghan Delaney is a founding member of Urban Refuge and is a graduate of the Boston University Pardee School of Global Studies where she received a BA in International Relations with a minor in Business Administration and Management. While at Boston University she was a coordinator at the Initiative on Cities, served as the Vice President of the International Affairs Association, and was a recipient of an Undergraduate Research Opportunity Program grant. She is now based in New York City at APCO Worldwide, an advisory and advocacy communications firm, where she advises Fortune 500 companies on navigating complex challenges.",
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
              founding class was to map aid for refugees in{" "}
              <span className="font-semibold text-blue-800">Amman, Jordan</span>{" "}
              using an open-source app that refugees can access free of charge.
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
              new ones, alumni stay connected through the Board of Directors, and
              each cohort leaves the app stronger than they found it. It is a
              testament to what a small, passionate team can build when driven by
              curiosity, collaboration, community, and commitment.
            </p>
          </div>

          {/* Journey timeline chips */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {[
              { year: "2016", label: "Founded at BU — Jordan focus" },
              { year: "2018", label: "Expanded to Istanbul" },
              { year: "2022", label: "Boston & US cities" },
              { year: "2024", label: "Continued global growth" },
            ].map(({ year, label }) => (
              <div
                key={year}
                className="flex items-center gap-3 bg-blue-800 text-white rounded-full px-5 py-2 text-sm"
              >
                <span className="font-bold text-amber-400">{year}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
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
              Urban Refuge is run by a team of entrepreneurs all under the age
              of 24, who have dedicated themselves to social good and innovative
              entrepreneurship.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Board of Directors */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-14">
            <p className="text-xs tracking-widest uppercase text-amber-600 font-semibold mb-3">
              Founding Members &amp; Faculty
            </p>
            <h2 className="text-3xl font-bold text-blue-800 mb-3">
              Board of Directors
            </h2>
            <p className="text-blue-800/70 max-w-xl mx-auto">
              The Urban Refuge Board of Directors is composed of Boston
              University faculty and alumni who have gone on to work in
              international development and STEM careers.
            </p>
          </div>

          <div className="space-y-8">
            {boardOfDirectors.map((member) => (
              <div
                key={member.name}
                className="bg-slate-50 rounded-2xl border border-blue-50 p-8 flex flex-col sm:flex-row gap-7"
              >
                <div className="flex flex-col items-center sm:items-start shrink-0">
                  <Avatar name={member.name} image={member.image} size="lg" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-blue-800 mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-xs tracking-widest uppercase text-amber-600 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-blue-800/75 leading-relaxed text-sm">
                    {member.bio}
                  </p>
                </div>
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
