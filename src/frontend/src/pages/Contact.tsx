import { Handshake, Building2, Mail } from "lucide-react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";

const partners: { name: string; abbr?: string; logo?: string }[] = [
  {
    name: "Frederick S. Pardee School of Global Studies",
    abbr: "Pardee School",
    logo: "/contact/pardee.webp",
  },
  {
    name: "Hariri Institute for Computing",
    abbr: "Hariri Institute",
    logo: "/contact/hariri.webp",
  },
  {
    name: "Initiative on Forced Migration & Human Trafficking",
    abbr: "FMHT",
    logo: "/contact/fmht.webp",
  },
  {
    name: "Microsoft",
    abbr: "Microsoft",
    logo: "/contact/msft.webp",
  },
  {
    name: "Migration Research Center at Koç University",
    abbr: "MiReKoc",
    logo: "/contact/mrk.webp",
  },
  {
    name: "International Rescue Committee",
    abbr: "IRC",
    logo: "/contact/irc.webp",
  },
];

export default function GetInvolved() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-blue-800 py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-amber-400 font-semibold mb-4">
            Join the Mission
          </p>
          <h1 className="text-5xl font-bold text-white mb-6">Get Involved</h1>
          <p className="text-lg text-white/85 leading-relaxed">
            Help us put aid on the map for vulnerable populations around the
            world. There are many ways to be a part of what we're building.
          </p>
        </div>
      </section>

      {/* Partnership section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest uppercase text-amber-600 font-semibold mb-3">
              Partner With Us
            </p>
            <h2 className="text-3xl font-bold text-blue-800 flex items-center justify-center gap-3">
              Interested in Joining Our Cause?
              <Handshake className="h-7 w-7 text-amber-500 shrink-0" />
            </h2>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-blue-50 p-10 space-y-6 text-blue-800/80 text-lg leading-relaxed">
            <p>
              We are thrilled to extend a call for partnerships on behalf of
              Urban Refuge. With support from academics, innovation hubs, and
              passionate crowdfunding, we have built a fully functional app that
              we are actively working to deploy in cities around the world.
            </p>
            <p>
              Our previous partnerships have been mutually beneficial — our
              partners receive the technology that we have created free of
              charge, and we are able to expand the reach of our app through the
              localized information that our partners provide. Together, we are
              able to improve the livelihoods of refugees living in cities with
              a demonstrated need for our services.
            </p>
            <p>
              Specifically, we are looking for organizations that are dedicated
              to working with{" "}
              <span className="font-semibold text-blue-800">
                GIS, mapping, and/or migration and resettlement
              </span>
              .
            </p>
            <p>
              If your organization is interested in this opportunity to
              collaborate and implement the Urban Refuge app, please reach out
              via the contact information below.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="mt-8 flex justify-center">
            <a
              href="mailto:ceo@urbanrefugemap.org"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
            >
              <Mail className="h-5 w-5" />
              Contact Us to Partner
            </a>
          </div>
        </div>
      </section>

      {/* Partners over the years */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-14">
            <p className="text-xs tracking-widest uppercase text-amber-600 font-semibold mb-3">
              Our Network
            </p>
            <h2 className="text-3xl font-bold text-blue-800 flex items-center justify-center gap-3">
              Partners Over the Years
              <Building2 className="h-7 w-7 text-amber-500 shrink-0" />
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-blue-50 shadow-sm overflow-hidden h-32 flex flex-col items-center justify-center text-center gap-2 p-4"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <>
                    {partner.abbr && (
                      <span className="text-xs font-bold tracking-widest uppercase text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                        {partner.abbr}
                      </span>
                    )}
                    <p className="text-blue-800/70 text-sm font-medium leading-snug">
                      {partner.name}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-blue-800/40 text-sm mt-8 italic">
            Interested in being listed here?{" "}
            <a
              href="mailto:ceo@urbanrefugemap.org"
              className="underline hover:text-blue-700"
            >
              Get in touch.
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
