import { useState } from "react";
import { useGetAllOrganizations } from "../hooks/organizations.hooks";
import { MapPin, Phone, Clock, ExternalLink, Loader2 } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { ScrollArea } from "../components/ui/scroll-area";
import { Organization } from "shared";
import OrganizationMap from "../components/OrganizationMap";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

const serviceTypeColors = {
  EDUCATION: "bg-blue-300 text-black",
  LEGAL: "bg-green-300 text-black",
  HOUSING: "bg-red-300 text-black",
  HEALTHCARE: "bg-purple-300 text-black",
  FOOD: "bg-yellow-300 text-black",
  EMPLOYMENT: "bg-orange-300 text-black",
  MENTAL_HEALTH: "bg-pink-300 text-black",
};

const Chip: React.FC<{ label: string; colorClass: string }> = ({
  label,
  colorClass,
}) => {
  return (
    <div
      className={cn("px-3 py-1 rounded-full text-sm font-medium", colorClass)}
    >
      {label}
    </div>
  );
};

const FindPage: React.FC = () => {
  const [selectedOrganization, setSelectedOrganization] =
    useState<Organization | null>(null);
  const {
    data: organizations,
    isLoading,
    isError,
    error,
  } = useGetAllOrganizations();

  if (isError || error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex border h-screen rounded-lg overflow-hidden">
        <nav className="w-96 bg-background border-r">
          <ScrollArea className="h-full">
            {isLoading && <Loader2 />}

            {organizations &&
              organizations.map((organization) => (
                <Button
                  key={organization.id}
                  variant="ghost"
                  className={cn(
                    "w-full h-max justify-start px-6 py-6 text-left text-wrap shadow rounded-none",
                    selectedOrganization?.id === organization.id && "bg-accent"
                  )}
                  onClick={() => setSelectedOrganization(organization)}
                >
                  <div className="tracking-tight">
                    <span className="font-semibold text-lg text-wrap">
                      {organization.name}
                    </span>
                    <div className="mt-2">
                      {organization.address && (
                        <div className="flex items-center text-sm">
                          <MapPin className="h-4 w-4" />
                          <span>{organization.address}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-wrap mt-3 space-x-2 gap-y-2">
                      {organization.serviceType.map((type) => (
                        <Chip
                          key={type}
                          label={type}
                          colorClass={
                            serviceTypeColors[type] || "bg-gray-300 text-black"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </Button>
              ))}
          </ScrollArea>
        </nav>
        <main className="flex-1 flex flex-col">
          <div className="flex-1">
            {organizations ? (
              <OrganizationMap
                organizations={organizations}
                setSelectedOrganization={setSelectedOrganization}
              />
            ) : (
              <Loader2 />
            )}
          </div>
          <div className="h-80 p-6 bg-background overflow-auto">
            {selectedOrganization ? (
              <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {selectedOrganization.name}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Store Information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedOrganization.address && (
                    <div className="flex items-center text-lg">
                      <MapPin className="mr-3 h-5 w-5" />
                      <span>{selectedOrganization.address}</span>
                    </div>
                  )}
                  {selectedOrganization.phoneNumber && (
                    <div className="flex items-center text-lg">
                      <Phone className="mr-3 h-5 w-5" />
                      <span>{selectedOrganization.phoneNumber}</span>
                    </div>
                  )}
                  {selectedOrganization.hours && (
                    <div className="flex items-center text-lg">
                      <Clock className="mr-3 h-5 w-5" />
                      <span>{selectedOrganization.hours}</span>
                    </div>
                  )}
                </CardContent>
                {selectedOrganization.website && (
                  <CardFooter>
                    <Button asChild variant="outline" size="lg">
                      <a
                        href={selectedOrganization.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg"
                      >
                        Visit Website
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground text-xl">
                Select a store to view details
              </div>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default FindPage;
