import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  ArrowRight,
  Heart,
  Users,
  MapPin,
  HelpingHand,
  Handshake,
  Target,
  EyeOff,
} from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    // Set heroLoaded to true after a short delay to trigger the animation
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <Navbar />
      {/* Hero Section */}
      <section
        className={`relative text-center py-36 transform transition-all duration-1000 ease-in-out ${
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
        <div className="absolute inset-0 bg-blue-800 opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4 text-white">
            Welcome to Urban Refuge
          </h1>
          <p className="text-2xl mb-6 text-white">
            Making aid accessible for refugees.
          </p>
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            <a href="/find-resources" className="flex items-center">
              Find Resources <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12">
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-4xl font-bold text-blue-800">What We Do</h2>
          <HelpingHand className="ml-3 h-8 w-8 text-amber-500" />
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12 px-16">
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow p-6 h-auto relative">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl mb-4">
                <MapPin className="mr-2 h-7 w-7 text-red-500" />
                Locate Aid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg text-gray-700 mb-8">
                Our platform provides refugees with access to nearby resources,
                including food banks, shelters, and medical clinics. With our
                user-friendly tools, locating assistance in urban areas becomes
                straightforward and efficient.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow p-6 h-auto relative">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl mb-4">
                <Users className="mr-2 h-7 w-7 text-green-500" />
                Community Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg text-gray-700 mb-8">
                We help refugees integrate into local communities by connecting
                them to support networks that foster inclusivity. Whether
                through social events, language classes, or group activities,
                Urban Refuge works to create a sense of belonging.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow p-6 h-auto relative">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl mb-4">
                <Heart className="mr-2 h-7 w-7 text-blue-500" />
                Contribute
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg text-gray-700 mb-8">
                Contributing to the cause is simple. We provide avenues for
                individuals and organizations to assist refugees by adding new
                resources or updating existing information. You can help by
                volunteering, donating, or sharing your expertise to create more
                comprehensive support.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Mission and Privacy Sections */}
      <section className="bg-white py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center px-12">
          {/* Image for Our Mission Section */}
          <img
            src="/stock.jpg"
            alt="Stock Image"
            className="w-full h-auto rounded-lg shadow-md"
          />
          {/* Our Mission Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-800 md:text-left flex items-center">
              Our Mission
              <Target className="ml-3 h-8 w-8 text-amber-500" />
            </h2>
            <p className="text-lg">
              Urban Refuge is dedicated to providing up-to-date information on
              aid resources for refugees in urban areas. Our platform allows
              users to easily locate and access vital services while also
              contributing to the growing network of support.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16 px-12">
          {/* Our Commitment to Privacy Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center md:text-left text-blue-800 flex items-center">
              Our Commitment to Privacy
              <EyeOff className="ml-3 h-8 w-8 text-amber-500" />
            </h2>
            <ul className="space-y-4 text-lg">
              <li>We never collect or store user data.</li>
              <li>We never collect or store user locations.</li>
              <li>Your identity will be kept 100% safe.</li>
              <li>All information is collected from public sources.</li>
            </ul>
          </div>
          {/* Image for Our Commitment to Privacy Section */}
          <img
            src="/city.jpg"
            alt="City Image"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
