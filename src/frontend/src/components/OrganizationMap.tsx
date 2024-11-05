import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
  MapCameraProps,
} from "@vis.gl/react-google-maps";
import { Organization } from "shared";
import OrganizationMarker from "./OrganizationMarker";
import { useCallback, useEffect, useState } from "react";

interface OrganizationMapProps {
  organizations: Organization[];
  setSelectedOrganization: (organization: Organization) => void;
  mapCenter: { lat: number; lng: number };
}

const OrganizationMap: React.FC<OrganizationMapProps> = ({
  organizations,
  setSelectedOrganization,
  mapCenter,
}) => {
  const [cameraProps, setCameraProps] = useState<MapCameraProps>({
    center: mapCenter,
    zoom: 12,
  });
  const handleCameraChange = useCallback((event: MapCameraChangedEvent) => {
    setCameraProps(event.detail);
  }, []);

  useEffect(() => {
    setCameraProps({
      center: mapCenter,
      zoom: cameraProps.zoom,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapCenter]);

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <Map
        style={{ width: "100%", height: "100%" }}
        {...cameraProps}
        onCameraChanged={handleCameraChange}
        defaultZoom={12}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        mapId={import.meta.env.VITE_GOOGLE_MAP_ID}>
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
