import { describe, expect, it } from "vitest";
import { getTemperatureLabel } from "./weather.utils.js";

describe("getTemperatureLabel", () => {
  it("formats a positive temperature", () => {
    expect(getTemperatureLabel(14.7)).toBe("14.7°C");
  });

  it("formats a negative temperature", () => {
    expect(getTemperatureLabel(-5)).toBe("-5°C");
  });

  it("formats zero degrees", () => {
    expect(getTemperatureLabel(0)).toBe("0°C");
  });
});
