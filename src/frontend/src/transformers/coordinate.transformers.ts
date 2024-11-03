export const coordinateTransformer = (
  coordinate: string
): google.maps.LatLngLiteral => {
  const [lat, lng] = coordinate.split(",");
  return { lat: Number(lat), lng: Number(lng) };
};
