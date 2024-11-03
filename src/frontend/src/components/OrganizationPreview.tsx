import React from "react";
import { Organization } from "shared";
import Chip from "./Chip";
import { serviceTypeColors } from "../types/organization.types";
import { Clock, ExternalLink, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

interface OrganizationPreviewProps {
  organization: Organization;
}

const OrganizationPreview: React.FC<OrganizationPreviewProps> = ({
  organization,
}) => {
  return (
    <div className="w-full flex justify-between">
      <div className="max-w-[45%]">
        <h1 className="text-2xl font-bold">{organization.name}</h1>

        <p className="my-3">{organization.description}</p>

        {organization.website && (
          <Button asChild variant="outline" size="lg" className="px-4 mb-3">
            <a
              href={organization.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg">
              Visit Website
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        )}

        {organization.extraFilters.length > 0 && (
          <div className="bg-gray-200 pt-3 p-4 rounded-lg mt-4">
            <div>Tags</div>
            <div className="flex flex-wrap mt-3 space-x-2 gap-y-2">
              {organization.extraFilters.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  colorClass={"bg-gray-300 text-black"}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="max-w-[45%] w-[45%]">
        {organization.address && (
          <div className="flex items-center text-lg mt-2">
            <MapPin className="mr-3 h-5 w-5" />
            <span>{organization.address}</span>
          </div>
        )}
        {organization.phoneNumber && (
          <div className="flex items-center text-lg mt-2">
            <Phone className="mr-3 h-5 w-5" />
            <span>{organization.phoneNumber}</span>
          </div>
        )}
        {organization.hours && (
          <div className="flex items-center text-lg mt-2">
            <Clock className="mr-3 h-5 w-5" />
            <span>{organization.hours}</span>
          </div>
        )}

        <div className="bg-gray-200 pt-3 p-4 rounded-lg mt-4">
          <div>Service Types</div>
          <div className="flex flex-wrap mt-3 space-x-2 gap-y-2">
            {organization.serviceType.map((type) => (
              <Chip
                key={type}
                label={type}
                colorClass={serviceTypeColors[type] || "bg-gray-300 text-black"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationPreview;
