import { Box, CircularProgress, Theme } from "@mui/material";
import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material";
import Main from "./components/Main";
import Widgets from "./components/Widgets";
import { useEffect, useState } from "react";
import axios from "axios";
import ErrorPage from "./components/ErrorPage";
import { WeatherType } from "./types/WeatherType";

const theme: Theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    primary: {
      main: "#DB5A42",
    },
    secondary: {
      main: "#DB5A42",
    },
  },
});

type fetchWeather = (city: string | null) => void

function App() {
  const [weatherData, setWeatherData] = useState<WeatherType>();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const defaultCity: string | null = localStorage.getItem("city")
    ? localStorage.getItem("city")
    : "Toronto";

  useEffect(() => {
    fetchWeather(defaultCity);
  }, []);

  const fetchWeather: fetchWeather = async (city) => {
    setLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=43563694236440f05683bc3b4eca0743`
      )
      .then((response) => {
        setWeatherData(response.data);
        localStorage.setItem("city", response.data?.name);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        localStorage.clear();
        setError(true);
        setLoading(false);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          sx={{
            maxWidth: "550px",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            width: "90%",
            flexDirection: "column",
          }}
        >
          <Header fetchWeather={fetchWeather} />
          {error ? (
            <ErrorPage />
          ) : (
            <>
              <Main
                city={weatherData?.name}
                country={weatherData?.sys?.country}
                icon={weatherData?.weather[0]?.icon}
                weatherDescription={weatherData?.weather[0]?.description}
                temp={weatherData?.main?.temp}
              />
              <Widgets
                temp={weatherData?.main.temp}
                feelsLike={weatherData?.main.feels_like}
                humidity={weatherData?.main.humidity}
                wind={weatherData?.wind.speed}
              />
            </>
          )}
        </Box>
      )}
    </ThemeProvider>
  );
}

export default App;
