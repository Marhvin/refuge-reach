import { setDefaults, fromAddress, OutputFormat } from "react-geocode";

setDefaults({
  key: process.env.GOOGLE_MAPS_API_KEY,
  language: "en",
  region: "us",
  outputFormat: OutputFormat.JSON,
});

/**
 * Converts an address to a latitude and longitude
 *
 * @param address the address to geocode
 * @returns the coordinates of a given address
 */
export const addressTransformer = async (address: string): Promise<string> => {
  try {
    const geocodedAddress = await fromAddress(address);
    const { lat, lng } = geocodedAddress.results[0].geometry.location;
    return `${lat},${lng}`;
  } catch (error) {
    throw new Error("Failed to geocode address");
  }
};
