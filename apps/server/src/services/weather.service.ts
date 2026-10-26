import {
  geocodingResponseSchema,
  forecastResponseSchema,
} from "../schemas/weather.schema.js";

export async function getWeatherByCity(city: string) {
  const geoUrl = new URL("https://geocoding-api.open-meteo.com/v1/search");

  geoUrl.searchParams.set("name", city);
  geoUrl.searchParams.set("count", "1");

  const geoResponse = await fetch(geoUrl);

  if (!geoResponse.ok) {
    throw new Error("Geocoding API failed");
  }

  const geoJson: unknown = await geoResponse.json();
  const geoData = geocodingResponseSchema.parse(geoJson);

  const location = geoData.results?.[0];

  if (!location) {
    throw new Error("CITY_NOT_FOUND");
  }

  const weatherUrl = new URL("https://api.open-meteo.com/v1/forecast");

  weatherUrl.searchParams.set("latitude", String(location.latitude));

  weatherUrl.searchParams.set("longitude", String(location.longitude));

  weatherUrl.searchParams.set(
    "current",
    "temperature_2m,relative_humidity_2m,wind_speed_10m",
  );

  const weatherResponse = await fetch(weatherUrl);
  //https://api.open-meteo.com/v1/forecast?latitude=49.42&longitude=26.99&current=temperature_2m%2Crelative_humidity_2m%2Cwind_speed_10m

  if (!weatherResponse.ok) {
    throw new Error("Weather API failed");
  }

  const weatherJson: unknown = await weatherResponse.json();
  const weatherData = forecastResponseSchema.parse(weatherJson);

  return {
    city: location.name,
    country: location.country,
    temperature: weatherData.current.temperature_2m,
    humidity: weatherData.current.relative_humidity_2m,
    windSpeed: weatherData.current.wind_speed_10m,
  };
}
