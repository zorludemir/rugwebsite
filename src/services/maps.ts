/**
 * Represents a geographical location with latitude and longitude coordinates.
 */
export interface Location {
  /**
   * The latitude of the location.
   */
  lat: number;
  /**
   * The longitude of the location.
   */
  lng: number;
}

/**
 * Asynchronously retrieves a Google Maps URL for a given location.
 *
 * @param location The location for which to retrieve a Google Maps URL.
 * @returns A promise that resolves to a string.
 */
export async function getGoogleMapsUrl(location: Location): Promise<string> {
  // TODO: Implement this by calling an API.

  return 'https://www.google.com/maps/place/Some+Factory/@34.0522,-118.2437,17z';
}
