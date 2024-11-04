import React, { useState } from "react";
import {
  useCreateOrganization,
  useDeleteOrganization,
  useEditOrganization,
  useGetAllOrganizations,
} from "../../hooks/organizations.hooks";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { ScrollArea } from "../../components/ui/scroll-area";
import { MapPin, Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";
import { Organization } from "shared";
import { useAuthenticatedResource } from "../../hooks/useAuthenticatedResource";
import { toastError, toastSuccess } from "../../utils/toast.utils";
import OrganizationForm from "./OrganizationForm";

const AdminPage: React.FC = () => {
  const [selectedOrganization, setSelectedOrganization] =
    useState<Organization | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [shouldReset, setShouldReset] = useState(false);

  useAuthenticatedResource();

  const {
    data: organizations,
    isLoading,
    isError,
    error,
  } = useGetAllOrganizations();
  const { mutateAsync: createOrganization } = useCreateOrganization();
  const { mutateAsync: editOrganization } = useEditOrganization();
  const { mutateAsync: deleteOrganization } = useDeleteOrganization();

  const filteredOrganizations = organizations?.filter((organization) =>
    organization.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const defaultOrganization: Organization = {
    id: "",
    name: "",
    serviceType: [],
    extraFilters: [],
    isPhysicalAddress: false,
    website: "",
    description: "",
    address: "",
    hours: "",
    phoneNumber: "",
    servicesOfferedLanguages: "",
  };

  const handleCreateNewOrganization = () => {
    setIsCreating(true);
    setSelectedOrganization(null);
    setShouldReset(true);
  };

  const onSubmit = async (data: Organization) => {
    if (isCreating) {
      try {
        await createOrganization(data);
        toastSuccess("Successfully created organization", "🎉");
      } catch {
        toastError("An error occurred creating the organization");
      }
    } else if (selectedOrganization) {
      try {
        await editOrganization(data);
        toastSuccess("Successfully edited organization", "📝");
      } catch {
        toastError("An error occurred editing the organization");
      }
    }
    setSelectedOrganization(null);
    setIsCreating(false);
  };

  const handleDeleteOrganization = async () => {
    if (selectedOrganization) {
      try {
        await deleteOrganization(selectedOrganization);
        toastSuccess("Successfully deleted organization", "🗑️");
        setSelectedOrganization(null);
      } catch {
        toastError("An error occurred deleting the organization");
      }
    }
  };

  const handleCancel = () => {
    setSelectedOrganization(null);
    setIsCreating(false);
  };

  if (isError || error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="flex border h-[calc(100vh-7rem)] rounded-lg overflow-hidden">
        <nav className="w-96 bg-background border-r">
          <div className="flex items-center space-x-4 p-4">
            <Input
              type="text"
              placeholder="Search organizations"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="default" onClick={handleCreateNewOrganization}>
              Create New
            </Button>
          </div>
          <ScrollArea className="h-[calc(100%-4.25rem)]">
            {isLoading && <Loader2 className="m-auto" />}
            {filteredOrganizations &&
              filteredOrganizations.map((organization) => (
                <Button
                  key={organization.id}
                  variant="ghost"
                  className={cn(
                    "w-full h-max justify-start px-6 py-4 text-left text-wrap shadow rounded-none",
                    selectedOrganization?.id === organization.id && "bg-accent"
                  )}
                  onClick={() => {
                    setSelectedOrganization(organization);
                    setIsCreating(false);
                  }}>
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
                    </div>
                  </div>
                </Button>
              ))}
          </ScrollArea>
        </nav>
        <main className="flex-1 flex flex-col">
          <div className="flex-1 p-6 bg-background overflow-auto">
            {!selectedOrganization && !isCreating && (
              <div className="flex flex-col h-full items-center justify-center text-muted-foreground text-xl">
                <p>Select an organization to edit</p>
                <Button
                  variant="default"
                  className="mt-4"
                  onClick={handleCreateNewOrganization}>
                  Create New Organization
                </Button>
              </div>
            )}
            {(selectedOrganization || isCreating) && (
              <OrganizationForm
                defaultValues={defaultOrganization}
                isCreating={isCreating}
                selectedOrganization={selectedOrganization}
                onSubmit={onSubmit}
                onDelete={handleDeleteOrganization}
                onCancel={handleCancel}
                shouldReset={shouldReset}
                setShouldReset={setShouldReset}
              />
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
