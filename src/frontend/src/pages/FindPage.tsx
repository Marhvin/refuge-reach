import { useState } from "react";
import { useGetAllOrganizations } from "../hooks/organizations.hooks";
import { MapPin, Loader2 } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { ScrollArea } from "../components/ui/scroll-area";
import { Organization } from "shared";
import OrganizationMap from "../components/OrganizationMap";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
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
import {
  useJsApiLoader,
  Autocomplete,
  Libraries,
} from "@react-google-maps/api";

const FindPage: React.FC = () => {
  const [mapCenter, setMapCenter] = useState({
    lat: 42.35680633300423,
    lng: -71.06049465910974,
  });
  const [selectedOrganization, setSelectedOrganization] =
    useState<Organization | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);

  const libraries: Libraries = ["places"];
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const {
    data: organizations,
    isLoading,
    isError,
    error,
  } = useGetAllOrganizations();

  const organizationTypes = Array.from(
    new Set(organizations?.flatMap((org) => org.serviceType) ?? [])
  );

  const haversineDistance = (
    coords1: { lat: number; lng: number },
    coords2: { lat: number; lng: number }
  ) => {
    const toRad = (value: number) => (value * Math.PI) / 180;
    const R = 6371; // Earth's radius in kilometers
    const dLat = toRad(coords2.lat - coords1.lat);
    const dLng = toRad(coords2.lng - coords1.lng);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(coords1.lat)) *
        Math.cos(toRad(coords2.lat)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const filteredOrganizations = organizations
    ?.filter((organization) => {
      const matchesSearch = organization.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesType =
        selectedTypes.length === 0 ||
        organization.serviceType.some((type) => selectedTypes.includes(type));
      return matchesSearch && matchesType;
    })
    .map((organization) => {
      // Calculate distance if user location is available
      let distance = null;
      if (userLocation && organization.coordinates) {
        const orgCoords = coordinateTransformer(organization.coordinates);
        distance = haversineDistance(userLocation, orgCoords);
      }
      return { ...organization, distance };
    })
    .sort((a, b) => {
      if (a.distance !== null && b.distance !== null) {
        return a.distance - b.distance;
      }
      return 0;
    });

  if (isError || error) {
    return <div>Error: {error.message}</div>;
  }

  const handleSelectOrganization = (organization: Organization) => {
    setSelectedOrganization(organization);
    if (organization.coordinates) {
      setMapCenter(coordinateTransformer(organization.coordinates));
    }
  };

  const onLoadAutocomplete = (
    autocompleteInstance: google.maps.places.Autocomplete
  ) => {
    setAutocomplete(autocompleteInstance);
  };

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        const userCoords = { lat, lng };
        setUserLocation(userCoords);
        setMapCenter(userCoords);
      }
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      {!isLoaded ? (
        <div>Loading Maps...</div>
      ) : (
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
                      }}>
                      {type}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="mt-4">
                <Autocomplete
                  onLoad={onLoadAutocomplete}
                  onPlaceChanged={onPlaceChanged}>
                  <Input
                    type="text"
                    placeholder="Enter your address or zipcode"
                  />
                </Autocomplete>
              </div>
            </div>
            <ScrollArea className="h-full">
              {isLoading && <Loader2 />}

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
                    onClick={() => handleSelectOrganization(organization)}>
                    <div className="tracking-tight">
                      <span className="font-semibold text-lg text-wrap">
                        {organization.name}
                      </span>
                      <div className="mt-2">
                        {organization.address && (
                          <div className="flex items-center text-sm">
                            <MapPin className="h-4 w-4" />
                            <span className="ml-1">{organization.address}</span>
                          </div>
                        )}
                        {organization.distance !== null && (
                          <div className="text-sm">
                            {organization.distance.toFixed(2)} km away
                          </div>
                        )}
                      </div>
                      <div className="flex flex-wrap mt-3 gap-y-2 gap-3">
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
      )}
      <Footer />
    </div>
  );
};

export default FindPage;
