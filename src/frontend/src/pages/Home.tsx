import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { ArrowRight, Heart, Users, MapPin } from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import LazyLoad from "react-lazy-load";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative text-center py-36"
        style={{
          backgroundImage:
            "url('https://images.squarespace-cdn.com/content/v1/573c78072eeb81d0d869605e/1582507523282-TTGYUS5RZUUVDL575VED/image-asset.jpeg?format=2500w')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="absolute inset-0 bg-blue-800 opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Welcome to Urban Refuge
          </h1>
          <p className="text-xl mb-6 text-white">
            Making aid accessible for refugees
          </p>
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white">
            <a href="/find" className="flex items-center">
              Find Resources <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-gray-100 py-16">
        <h2 className="text-3xl font-bold mb-8 text-blue-800 text-center">
          What We Do
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12 px-12">
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-blue-500" />
                Locate Aid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Find nearby resources including food banks, shelters, and
                medical clinics.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-blue-500" />
                Community Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Connect with local communities and support networks for
                refugees.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="mr-2 h-5 w-5 text-blue-500" />
                Contribute
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Help others by adding new resources or updating existing
                information.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who We Are Section with Video */}
      <section className="bg-white py-16">
        <h2 className="text-3xl font-bold mb-8 text-blue-800 text-center">
          Who We Are
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <LazyLoad>
            <video
              className="w-full h-auto rounded-lg shadow-md"
              controls
              poster="https://via.placeholder.com/800x450.png?text=Who+We+Are" // Optional poster image
            >
              <source src="/UrbanRefuge_mid.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </LazyLoad>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-gray-100 py-16">
        <h2 className="text-3xl font-bold mb-8 text-blue-800 text-center ">
          Our Mission
        </h2>
        <p className="max-w-2xl mx-auto text-blue-700 text-lg text-center">
          Urban Refuge is dedicated to providing up-to-date information on aid
          resources for refugees in urban areas. Our platform allows users to
          easily locate and access vital services while also contributing to the
          growing network of support.
        </p>
      </section>

      {/* Privacy Commitment Section */}
      <section className="mt-16 text-center bg-blue-100 p-12 shadow-inner">
        <h2 className="text-3xl font-bold mb-8 text-blue-800">
          Our Commitment to Privacy
        </h2>
        <ul className="text-blue-700 space-y-4 text-lg">
          <li>We never collect or store data.</li>
          <li>We never collect or store locations.</li>
          <li>Your identity will be kept 100% safe.</li>
          <li>All information is collected from public sources.</li>
        </ul>
      </section>

      <Footer />
    </main>
  );
}
