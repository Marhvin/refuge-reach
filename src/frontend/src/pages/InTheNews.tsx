import { ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

const articles = [
  {
    title:
      "Pardee's Urban Refuge Program Wins APSIA Award for Community Building",
    quote:
      "With the APSIA honor, the Urban Refuge Program adds another feather to its cap — signifying that social change is rooted in curiosity, collaboration, community, and commitment.",
    image: "/news/APSIA.jpg",

    link: "https://www.bu.edu/pardeeschool/2025/06/24/pardees-urban-refuge-program-wins-apsia-award-for-community-building/",
  },
  {
    title: "Urban Refuge Alumni Reunion Highlights Careers and Impact",
    quote:
      "If you're very passionate about something, it doesn't have to be your 9-to-5. You can still continue impacting that change in the 5-to-9 that you have after you leave that job.",
    image: "/news/urteam.jpeg",
    link: "https://www.bu.edu/pardeeschool/2024/12/05/urban-refuge-alumni-reunion-highlights-careers-and-impact/",
  },
  {
    title:
      "Boston Network for International Development Interviews Noora Lori and Vicky Kelberer",
    quote:
      'The number one take away I have from this project is to eliminate the words "I cannot" from my vocabulary. Whenever you\'re asked if you can do something you say yes because you can always learn.',
    image: "/news/bnid.png",
    link: "https://bnid.org/creation-of-urban-refuge-app-at-boston-university/",
  },
  {
    title:
      "Professor Lori Discusses her work with Pearson Degrees Digital Magazine",
    quote:
      "Noora says she's been inspired by the passion her students bring to the project. \"They started out saying 'How on earth are we going to build an app? We don't know anything about coding or tech!' They've since learned how to tap into their own networks, building allies throughout BU and from larger organizations who are willing to help… and even code.\"",
    image: "/news/pearson.webp",
    link: "https://www.bu.edu/pardeeschool/2016/12/23/lori-interviewed-in-pearson-on-urban-refuge-app/",
  },
  {
    title:
      "Pardee Students Lead Urban Refuge's Continued Impact at BostonHacks",
    quote:
      "Under Dr. Lori's mentorship, Pardee students have been instrumental in evolving Urban Refuge's vision from a geolocation app initially developed to support refugees in Jordan to a comprehensive platform now focused on supporting displaced individuals in the Greater Boston area.",
    image: "/news/pardee.jpg",
    link: "https://www.bu.edu/pardeeschool/2024/12/05/pardee-students-lead-urban-refuges-continued-impact-at-bostonhacks/",
  },
  {
    title: "Urban Refuge Getting Attention down in Miami, FL!",
    quote:
      'Francesca Paranzino y sus compañeras de la Universidad de Boston estaban "un poco cansadas" de trabajar sólo con teorías. Por eso cuando en una de sus clases les pidieron analizar cómo se podría usar la tecnología para ayudar a las personas que buscan refugio en otros países, ellas decidieron ir más allá.',
    image: "/news/enh.png",
    link: "https://www.elnuevoherald.com/noticias/florida/sur-de-la-florida/article102807302.html",
  },
  {
    title: "Urban Refuge feature in Bostonia",
    quote:
      "We would use the students' creativity and new technologies, bring in alumni, consult with an entire network of businessmen and -women with expertise in technical fields. The result far exceeded her expectations.",
    image: "/news/bostonia.jpg",
    link: "https://www.bu.edu/bostonia/2016/bu-students-creates-app-to-aid-syrian-refugees/",
  },
  {
    title: "Dev Radio Full Interview",
    quote:
      "Join Jerry Nixon as he welcomes the team from Urban Refuge as they describe how they worked with a team of Microsoft Technical Evangelists to help create this cross-platform app using Xamarin.",
    image: "/news/devradio.webp",
    link: "https://www.bu.edu/pardeeschool/2016/12/06/pardee-students-partner-with-microsoft-to-develop-app/",
  },
];

export default function InTheNews() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-blue-800 py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-amber-400 font-semibold mb-4">
            Media
          </p>
          <h1 className="text-5xl font-bold text-white mb-6">In the News</h1>
          <p className="text-lg text-white/85 leading-relaxed">
            Urban Refuge has been featured by journalists, researchers, and
            publications around the world. Here's a collection of articles,
            interviews, and spotlights.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-14">
            <p className="text-xs tracking-widest uppercase text-amber-600 font-semibold mb-3">
              Press
            </p>
            <h2 className="text-3xl font-bold text-blue-800">
              Articles &amp; Interviews
            </h2>
          </div>

          <div className="space-y-10">
            {articles.map((article) => (
              <article
                key={article.title}
                className="bg-white rounded-2xl shadow-sm border border-blue-50 overflow-hidden flex flex-col md:flex-row"
              >
                {/* Image */}
                {article.image && (
                  <div className="md:w-56 md:shrink-0 h-48 md:h-auto overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col justify-between p-7 flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-blue-800 mb-3 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-blue-800/70 leading-relaxed italic mb-5 text-sm">
                      "{article.quote}"
                    </p>
                  </div>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-amber-600 font-semibold text-sm hover:text-amber-700 transition-colors self-start"
                  >
                    Learn More
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing quote */}
      <section className="bg-blue-800 py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-white/90 text-xl leading-relaxed italic">
            "Most of the students have graduated and have demanding, full-time
            jobs, but none of us are stopping. The ultimate goal is helping
            people."
          </p>
          <p className="text-amber-400 font-semibold mt-5 text-sm tracking-wide uppercase">
            — Noora Lori, Assistant Professor, Pardee School of Global Studies,
            Boston University
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
