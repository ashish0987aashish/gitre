import React, { useState, useEffect } from "react";
import TopButtons from "./Components/TopButtons";
import Inputs from "./Components/Inputs";
import TimeAndLocation from "./Components/TimeAndLocation";
import TempAndDetails from "./Components/TempAndDetails";
import Forecast from "./Components/Forecast";
import getWeatherData from "./services/weatherService";
import getFormattedWeatherData from "./services/weatherService";

const App = () => {
  const [query, setQuery] = useState({ q: "nayagarh" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    await getFormattedWeatherData({ ...query, units }).then((data) =>
      setWeather(data)
    );
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  return (
    <div className="mx-auto h-auto w-full sm:h-screen lg:h-screen xl:h-auto  xl:w-3/5 xl:my-5 lg:py-5 lg:px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600  to-blue-800">
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} query={query} setUnits={setUnits} />

      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} units={units} />
          <Forecast title="3 hour step forecast" data={weather.hourly} />
          <Forecast title="daily forecast" data={weather.daily} />
        </>
      )}
    </div>
  );
};

export default App;
