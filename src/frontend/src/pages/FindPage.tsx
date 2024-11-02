import { useState } from "react";
import { useGetAllOrganizations } from "../hooks/organizations.hooks";

import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
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

const FindPage: React.FC = () => {
  const [selectedOrganization, setSelectedOrganization] =
    useState<Organization | null>(null);
  const {
    data: organizations,
    isLoading,
    isError,
    error,
  } = useGetAllOrganizations();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex border h-screen rounded-lg overflow-hidden">
      <nav className="w-96 bg-background border-r">
        <ScrollArea className="h-full">
          {organizations &&
            organizations.map((organization) => (
              <Button
                key={organization.id}
                variant="ghost"
                className={cn(
                  "w-full justify-start px-6 py-12 text-left text-wrap",
                  selectedOrganization?.id === organization.id && "bg-accent"
                )}
                onClick={() => setSelectedOrganization(organization)}>
                <div className="tracking-tight">
                  <span className="font-semibold text-lg text-wrap">
                    {organization.name}
                  </span>
                  <div className="mt-2">
                    {organization.address && (
                      <div className="flex items-center text-sm">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>{organization.address}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Button>
            ))}
        </ScrollArea>
      </nav>
      <main className="flex-1 flex flex-col">
        <div className="flex-1 bg-muted p-6">
          {/* Google Maps placeholder */}
          <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
            <span className="text-gray-500 text-xl">
              Google Maps would be displayed here
            </span>
          </div>
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
                <div className="flex items-center text-lg">
                  <MapPin className="mr-3 h-5 w-5" />
                  <span>{selectedOrganization.address}</span>
                </div>
                <div className="flex items-center text-lg">
                  <Phone className="mr-3 h-5 w-5" />
                  <span>{selectedOrganization.phoneNumber}</span>
                </div>
                <div className="flex items-center text-lg">
                  <Clock className="mr-3 h-5 w-5" />
                  <span>{selectedOrganization.hours}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" size="lg">
                  <a
                    href={selectedOrganization.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg">
                    Visit Website
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <div className="flex h-full items-center justify-center text-muted-foreground text-xl">
              Select a store to view details
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default FindPage;
