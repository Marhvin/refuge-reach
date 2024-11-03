import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { Organization } from "shared";
import OrganizationMarker from "./OrganizationMarker";

interface OrganizationMapProps {
  organizations: Organization[];
  setSelectedOrganization: (organization: Organization) => void;
}

const OrganizationMap: React.FC<OrganizationMapProps> = ({
  organizations,
  setSelectedOrganization,
}) => {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <Map
        style={{ width: "100%", height: "100%" }}
        defaultCenter={{ lat: 42.35680633300423, lng: -71.06049465910974 }}
        defaultZoom={12}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        mapId={"8a70719044abaac4"}>
        {organizations.map((organization: Organization) => {
          if (organization.isPhysicalAddress && organization.coordinates)
            return (
              <OrganizationMarker
                key={organization.id}
                organization={organization}
                setSelectedOrganization={setSelectedOrganization}
              />
            );
        })}
      </Map>
    </APIProvider>
  );
};

export default OrganizationMap;
