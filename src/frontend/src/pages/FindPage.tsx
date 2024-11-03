import { useState } from "react";
import { useGetAllOrganizations } from "../hooks/organizations.hooks";
import { MapPin, Loader2 } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { ScrollArea } from "../components/ui/scroll-area";
import { Organization } from "shared";
import OrganizationMap from "../components/OrganizationMap";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import Chip from "../components/Chip";
import OrganizationPreview from "../components/OrganizationPreview";
import { serviceTypeColors } from "../types/organization.types";

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
      <div className="flex border h-[calc(100vh-7rem)] rounded-lg overflow-hidden">
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
                  onClick={() => setSelectedOrganization(organization)}>
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
              <OrganizationPreview organization={selectedOrganization} />
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
