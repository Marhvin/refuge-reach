import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import {
  Organization,
  OrganizationServiceType,
  OrganizationTags,
} from "shared";
import { enumToList } from "../../transformers/organization.transformers";

const organizationServiceTypes = enumToList(OrganizationServiceType);
const organizationTags = enumToList(OrganizationTags);

interface OrganizationFormProps {
  defaultValues: Organization;
  isCreating: boolean;
  selectedOrganization: Organization | null;
  onSubmit: (data: Organization) => Promise<void>;
  onDelete: () => Promise<void>;
  onCancel: () => void;
  shouldReset: boolean;
  setShouldReset: (value: boolean) => void;
}

const OrganizationForm: React.FC<OrganizationFormProps> = ({
  defaultValues,
  isCreating,
  selectedOrganization,
  onSubmit,
  onDelete,
  onCancel,
  shouldReset,
  setShouldReset,
}) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm<Organization>({
    defaultValues,
  });

  const isPhysicalAddress = watch("isPhysicalAddress", false);
  const extraFilters = watch("extraFilters") || [];

  useEffect(() => {
    if (selectedOrganization) {
      reset(selectedOrganization);
    } else {
      reset();
    }
  }, [selectedOrganization, reset]);

  useEffect(() => {
    if (shouldReset) {
      reset(defaultValues);
      setShouldReset(false);
    }
  }, [defaultValues, reset, setShouldReset, shouldReset]);

  const handleDelete = () => {
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    onDelete();
    setIsDeleteDialogOpen(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto space-y-4"
    >
      <h1 className="text-2xl font-bold">
        {isCreating ? "Create a new Organization" : "Edit an Organization"}
      </h1>

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
        <Label htmlFor="address">
          Address
          {isPhysicalAddress && <span className="text-red-500 ml-1">*</span>}
        </Label>
        <Input
          id="address"
          {...register("address", {
            validate: (value) =>
              isPhysicalAddress && !value
                ? "Address is required when 'Is a physical address' is checked"
                : true,
          })}
        />
        {errors.address && (
          <span className="text-red-500">{errors.address.message}</span>
        )}
      </div>

      <div className="flex items-center mt-4">
        <Controller
          name="isPhysicalAddress"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <Checkbox
              id="isPhysicalAddress"
              checked={field.value}
              onCheckedChange={(checked: boolean) => field.onChange(checked)}
            />
          )}
        />
        <Label htmlFor="isPhysicalAddress" className="ml-2">
          Is a physical address
        </Label>
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

      <Controller
        name="serviceType"
        control={control}
        defaultValue={[]}
        rules={{
          validate: (value) =>
            (value && value.length > 0) ||
            "At least one service type must be selected",
        }}
        render={({ field }) => (
          <div>
            <Label>
              Service Type<span className="text-red-500 ml-1">*</span>
            </Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {organizationServiceTypes.map((type: string) => {
                const checked =
                  field.value?.includes(type as OrganizationServiceType) ||
                  false;
                return (
                  <div key={type} className="flex items-center">
                    <Checkbox
                      checked={checked}
                      onCheckedChange={(checked) => {
                        const updatedValue = checked
                          ? [...field.value, type]
                          : field.value.filter((t: string) => t !== type);
                        field.onChange(updatedValue);
                      }}
                    />
                    <Label className="ml-2">{type}</Label>
                  </div>
                );
              })}
            </div>
            {errors.serviceType && (
              <span className="text-red-500">{errors.serviceType.message}</span>
            )}
          </div>
        )}
      />

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
                    setValue(
                      "extraFilters",
                      checked
                        ? [...extraFilters, st]
                        : extraFilters.filter((t) => t !== tag)
                    );
                  }}
                />
                <Label className="ml-2">{tag}</Label>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <Label htmlFor="servicesOfferedLanguages">Languages Offered</Label>
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
          <Dialog
            open={isDeleteDialogOpen}
            onOpenChange={setIsDeleteDialogOpen}
          >
            <DialogTrigger asChild>
              <Button
                variant="destructive"
                onClick={handleDelete}
                type="button"
              >
                Delete
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Are you sure you want to delete this organization?
                </DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete the
                  organization and remove all of its data from our servers.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button
                  variant="secondary"
                  onClick={() => setIsDeleteDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button variant="destructive" onClick={confirmDelete}>
                  Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">{isCreating ? "Create" : "Edit"}</Button>
      </div>
    </form>
  );
};

export default OrganizationForm;
