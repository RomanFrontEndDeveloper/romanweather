"use client";

import { useState } from "react";

type Weather = {
  city: string;
  country: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
};

export default function Home() {
  const [city, setCity] = useState("Kyiv");
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedCity = city.trim();

    if (!normalizedCity) {
      setError("Введи назву міста.");
      setWeather(null);
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const url = new URL("http://localhost:5000/api/weather");
      url.searchParams.set("city", normalizedCity);

      const response = await fetch(url);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Не вдалося отримати погоду.");
      }

      setWeather(data as Weather);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Сталася невідома помилка.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <section className="mx-auto max-w-xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          WeatherPulse
        </p>

        <h1 className="mb-3 text-4xl font-bold">Погода навколо тебе</h1>

        <p className="mb-8 text-slate-400">
          Дізнайся актуальну температуру, вологість і швидкість вітру.
        </p>

        <form onSubmit={handleSearch} className="mb-6 flex gap-3">
          <input
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="Наприклад, Kyiv"
            aria-label="Назва міста"
            className="min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 disabled:opacity-50"
          >
            {loading ? "Завантаження..." : "Знайти"}
          </button>
        </form>

        {error && (
          <p
            role="alert"
            className="mb-5 rounded-xl bg-red-950 p-4 text-red-300"
          >
            {error}
          </p>
        )}

        {weather && (
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-400">{weather.country}</p>

            <h2 className="mb-5 text-2xl font-semibold">{weather.city}</h2>

            <p className="mb-6 text-6xl font-bold">{weather.temperature}°C</p>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-slate-800 p-4">
                <p className="text-sm text-slate-400">Вологість</p>
                <p className="mt-2 text-xl font-semibold">
                  {weather.humidity}%
                </p>
              </div>

              <div className="rounded-xl bg-slate-800 p-4">
                <p className="text-sm text-slate-400">Швидкість вітру</p>
                <p className="mt-2 text-xl font-semibold">
                  {weather.windSpeed} км/год
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
