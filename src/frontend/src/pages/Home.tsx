import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Heart, Users, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 pb-16">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Welcome to Refuge Reach
        </h1>
        <p className="text-xl mb-6">
          Connecting refugees with vital resources in urban areas
        </p>
        <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
          <a href="/find-resources" className="flex items-center">
            Find Resources <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-blue-500" />
              Locate Aid
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Find nearby resources including food banks, shelters, and medical
              clinics.
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
              Connect with local communities and support networks for refugees.
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
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Our Mission</h2>
        <p className="max-w-2xl mx-auto text-blue-700">
          Refuge Reach is dedicated to providing up-to-date information on aid
          resources for refugees in urban areas. Our platform allows users to
          easily locate and access vital services while also contributing to the
          growing network of support.
        </p>
      </section>

      <section className="mt-12 text-center bg-blue-100 p-6 rounded-lg shadow-inner">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">
          Our Commitment to Privacy
        </h2>
        <ul className="text-blue-700 space-y-2">
          <li>We never collect or store data.</li>
          <li>We never collect or store locations.</li>
          <li>Your identity will be kept 100% safe.</li>
          <li>All information is collected from public sources.</li>
        </ul>
      </section>
    </main>
  );
}
