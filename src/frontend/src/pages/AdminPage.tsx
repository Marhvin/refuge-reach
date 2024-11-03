import React, { useState, useEffect } from "react";
import { useGetAllOrganizations } from "../hooks/organizations.hooks";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { ScrollArea } from "../components/ui/scroll-area";
import { MapPin, Loader2 } from "lucide-react";
import { cn } from "../lib/utils";
import {
  Organization,
  OrganizationServiceType,
  OrganizationTags,
} from "shared";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { useForm } from "react-hook-form";
import { enumToList } from "../transformers/organization.transformers";

const organizationServiceTypes = enumToList(OrganizationServiceType);
const organizationTags = enumToList(OrganizationTags);

const AdminPage: React.FC = () => {
  const [selectedOrganization, setSelectedOrganization] =
    useState<Organization | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const {
    data: organizations,
    isLoading,
    isError,
    error,
  } = useGetAllOrganizations();

  const filteredOrganizations = organizations?.filter((organization) =>
    organization.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Form handling
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Organization>();

  useEffect(() => {
    if (selectedOrganization) {
      // Populate form with selected organization's data
      reset(selectedOrganization);
    } else {
      reset();
    }
  }, [selectedOrganization, reset]);

  const onSubmit = (data: Organization) => {
    if (isCreating) {
      // Handle create organization
      console.log("Creating organization:", data);
      // Call your API to create organization
    } else if (selectedOrganization) {
      // Handle update organization
      console.log("Updating organization:", data);
      // Call your API to update organization
    }
    setSelectedOrganization(null);
    setIsCreating(false);
  };

  const handleDeleteOrganization = () => {
    if (selectedOrganization) {
      // Handle delete organization
      console.log("Deleting organization:", selectedOrganization);
      // Call your API to delete organization
      setSelectedOrganization(null);
    }
  };

  const handleCancel = () => {
    setSelectedOrganization(null);
    setIsCreating(false);
  };

  const serviceType = watch("serviceType") || [];
  const extraFilters = watch("extraFilters") || [];

  if (isError || error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="flex border h-[calc(100vh-7rem)] rounded-lg overflow-hidden">
        <nav className="w-96 bg-background border-r">
          <div className="p-4">
            <Input
              type="text"
              placeholder="Search organizations"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <ScrollArea className="h-full">
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
                  }}
                >
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
                  onClick={() => {
                    setIsCreating(true);
                    setSelectedOrganization(null);
                  }}
                >
                  Create New Organization
                </Button>
              </div>
            )}
            {(selectedOrganization || isCreating) && (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-2xl mx-auto space-y-4"
              >
                <div>
                  <Label htmlFor="name">
                    Name<span className="text-red-500 ml-1">*</span>
                  </Label>
                  <Input id="name" {...register("name", { required: true })} />
                  {errors.name && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" {...register("address")} />
                </div>

                <div>
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" {...register("website")} />
                </div>

                <div>
                  <Label htmlFor="hours">Hours</Label>
                  <Input id="hours" {...register("hours")} />
                </div>

                <div>
                  <Label htmlFor="phoneNumber">Phone</Label>
                  <Input id="phoneNumber" {...register("phoneNumber")} />
                </div>

                <div>
                  <Label>
                    Service Type<span className="text-red-500 ml-1">*</span>
                  </Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {organizationServiceTypes.map((type: string) => {
                      const st = type as OrganizationServiceType;
                      return (
                        <div key={type} className="flex items-center">
                          <Checkbox
                            checked={serviceType.includes(st)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setValue("serviceType", [...serviceType, st]);
                              } else {
                                setValue(
                                  "serviceType",
                                  serviceType.filter((t) => t !== type)
                                );
                              }
                            }}
                          />
                          <Label className="ml-2">{type}</Label>
                        </div>
                      );
                    })}
                  </div>
                  {errors.serviceType && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                <div>
                  <Label>Tags</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {organizationTags.map((tag: string) => {
                      const st = tag as OrganizationTags;
                      return (
                        <div key={tag} className="flex items-center">
                          <Checkbox
                            checked={extraFilters.includes(st)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setValue("extraFilters", [...extraFilters, st]);
                              } else {
                                setValue(
                                  "extraFilters",
                                  extraFilters.filter((t) => t !== st)
                                );
                              }
                            }}
                          />
                          <Label className="ml-2">{tag}</Label>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center mt-4">
                  <Checkbox
                    id="isPhysicalAddress"
                    {...register("isPhysicalAddress")}
                  />
                  <Label htmlFor="isPhysicalAddress" className="ml-2">
                    Has a physical address
                  </Label>
                </div>

                <div>
                  <Label htmlFor="servicesOfferedLanguages">
                    Languages Offered
                  </Label>
                  <Input
                    id="servicesOfferedLanguages"
                    {...register("servicesOfferedLanguages")}
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" {...register("description")} />
                </div>

                <div className="flex justify-end space-x-4 mt-6">
                  {selectedOrganization && !isCreating && (
                    <Button
                      variant="destructive"
                      onClick={handleDeleteOrganization}
                    >
                      Delete
                    </Button>
                  )}
                  <Button variant="secondary" onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {isCreating ? "Create" : "Edit"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
