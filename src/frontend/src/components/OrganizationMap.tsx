import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { Organization } from "shared";
import { coordinateTransformer } from "../transformers/coordinate.transformers";

interface OrganizationMapProps {
  organizations: Organization[];
}

const OrganizationMap: React.FC<OrganizationMapProps> = ({ organizations }) => {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <Map
        style={{ width: "100%", height: "100%" }}
        defaultCenter={{ lat: 42.35680633300423, lng: -71.06049465910974 }}
        defaultZoom={12}
        gestureHandling={"greedy"}
        disableDefaultUI={true}>
        {organizations.map((organization: Organization) => {
          if (organization.isPhysicalAddress && organization.coordinates)
            return (
              <Marker
                position={coordinateTransformer(organization.coordinates)}
              />
            );
        })}
      </Map>
    </APIProvider>
  );
};

export default OrganizationMap;
