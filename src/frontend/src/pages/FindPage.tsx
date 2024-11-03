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
import { serviceTypeColors } from "../types/organization.types";
import { Input } from "../components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
} from "../components/ui/dropdown-menu";
import OrganizationPreview from "../components/OrganizationPreview";
import { coordinateTransformer } from "../transformers/coordinate.transformers";

const FindPage: React.FC = () => {
  const [mapCenter, setMapCenter] = useState({
    lat: 42.35680633300423,
    lng: -71.06049465910974,
  });
  const [selectedOrganization, setSelectedOrganization] =
    useState<Organization | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const {
    data: organizations,
    isLoading,
    isError,
    error,
  } = useGetAllOrganizations();

  // Get the list of all unique service types
  const organizationTypes = Array.from(
    new Set(organizations?.flatMap((org) => org.serviceType) ?? [])
  );

  // Filter the organizations based on search query and selected types
  const filteredOrganizations = organizations?.filter((organization) => {
    const matchesSearch = organization.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType =
      selectedTypes.length === 0 ||
      organization.serviceType.some((type) => selectedTypes.includes(type));
    return matchesSearch && matchesType;
  });

  if (isError || error) {
    return <div>Error: {error.message}</div>;
  }

  const handleSelectOrganization = (organization: Organization) => {
    setSelectedOrganization(organization);
    if (organization.coordinates) {
      console.log("organization.coordinates", organization.coordinates);
      setMapCenter(coordinateTransformer(organization.coordinates));
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex border h-[calc(100vh-7rem)] rounded-lg overflow-hidden">
        <nav className="w-96 bg-background border-r">
          <div className="p-4">
            <Input
              type="text"
              placeholder="Search organizations"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="mt-2 w-full">
                  Filter by Type
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Select Types</DropdownMenuLabel>
                {organizationTypes.map((type) => (
                  <DropdownMenuCheckboxItem
                    key={type}
                    checked={selectedTypes.includes(type)}
                    onCheckedChange={(checked: boolean) => {
                      setSelectedTypes((prev) =>
                        checked
                          ? [...prev, type]
                          : prev.filter((t) => t !== type)
                      );
                    }}
                  >
                    {type}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ScrollArea className="h-full">
            {isLoading && <Loader2 />}

            <div className="mb-28">
              {filteredOrganizations &&
                filteredOrganizations.map((organization) => (
                  <Button
                    key={organization.id}
                    variant="ghost"
                    className={cn(
                      "w-full h-max justify-start px-6 py-6 text-left text-wrap shadow rounded-none",
                      selectedOrganization?.id === organization.id &&
                        "bg-accent"
                    )}
                    onClick={() => handleSelectOrganization(organization)}
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
                      <div className="flex flex-wrap mt-3 gap-3 gap-y-2">
                        {organization.serviceType.map((type) => (
                          <Chip
                            key={type}
                            label={type}
                            colorClass={
                              serviceTypeColors[type] ||
                              "bg-gray-300 text-black"
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </Button>
                ))}
            </div>
          </ScrollArea>
        </nav>
        <main className="flex-1 flex flex-col">
          <div className="flex-1">
            {filteredOrganizations ? (
              <OrganizationMap
                organizations={filteredOrganizations}
                setSelectedOrganization={setSelectedOrganization}
                mapCenter={mapCenter}
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
