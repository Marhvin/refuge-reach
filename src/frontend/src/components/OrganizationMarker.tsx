import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import React, { useState } from "react";
import { Organization } from "shared";
import { coordinateTransformer } from "../transformers/coordinate.transformers";
import { Clock, MapPin, Phone } from "lucide-react";

interface OrganizationMarkerProps {
  organization: Organization;
  setSelectedOrganization: (organization: Organization) => void;
}

const OrganizationMarker: React.FC<OrganizationMarkerProps> = ({
  organization,
  setSelectedOrganization,
}) => {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infoWindowShown, setInfoWindowShown] = useState(false);

  const handleMarkerClick = () => {
    setInfoWindowShown((isShown) => !isShown);
    setSelectedOrganization(organization);
  };

  if (organization.isPhysicalAddress && organization.coordinates)
    return (
      <>
        <AdvancedMarker
          ref={markerRef}
          position={coordinateTransformer(organization.coordinates)}
          onClick={handleMarkerClick}
        />

        {infoWindowShown && (
          <InfoWindow anchor={marker} onClose={() => setInfoWindowShown(false)}>
            <h1 className="font-bold text-xl">{organization.name}</h1>
            {organization.address && (
              <div className="flex items-center text-lg">
                <MapPin className="mr-3 h-5 w-5" />
                <span>{organization.address}</span>
              </div>
            )}
            {organization.phoneNumber && (
              <div className="flex items-center text-lg">
                <Phone className="mr-3 h-5 w-5" />
                <span>{organization.phoneNumber}</span>
              </div>
            )}
            {organization.hours && (
              <div className="flex items-center text-lg">
                <Clock className="mr-3 h-5 w-5" />
                <span>{organization.hours}</span>
              </div>
            )}
          </InfoWindow>
        )}
      </>
    );
};

export default OrganizationMarker;
