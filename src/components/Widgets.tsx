import Drop from "../assets/drop.png";
import Rain from "../assets/rain.png";
import Thermometer from "../assets/thermometer.png";
import Tornado from "../assets/tornado.png";
import { Box, Typography } from "@mui/material";

type Props = { 
  temp?: number,
  feelsLike?: number,
  humidity?: number,
  wind?: number
}

const Widgets = ({ temp, feelsLike, humidity, wind }: Props) => {

  const celsiusTemp: number = Math.round(temp! - 273.15);
  const celsiusFeelsLike: number = Math.round(feelsLike! - 273.15);
  const kmPerHourWind: number = Math.round(wind! * 3.6);

  return (
    <Box>
      <Box sx={{ mt: "24px" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              backgroundColor: "white",
              width: "200px",
              padding: "16px",
              borderRadius: "24px",
              mx: "12px",
              alignItems: "center",
            }}
          >
            <Box
              sx={{ width: "42px", height: "42px", mr: "12px" }}
              component="img"
              src={Thermometer}
            />
            <Box>
              <Typography
                sx={{ fontWeight: "bold", color: "#3B3B3B", fontSize: "14px" }}
              >
                {celsiusTemp}.0 °C
              </Typography>
              <Typography sx={{ color: "#696969", fontSize: "14px" }}>
                Temp
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              backgroundColor: "white",
              width: "200px",
              padding: "16px",
              borderRadius: "24px",
              mx: "12px",
              alignItems: "center",
            }}
          >
            <Box
              sx={{ width: "42px", mr: "12px", height: "42px" }}
              component="img"
              src={Rain}
            />
            <Box>
              <Typography
                sx={{ fontWeight: "bold", color: "#3B3B3B", fontSize: "14px" }}
              >
                {celsiusFeelsLike}.0 °C
              </Typography>
              <Typography sx={{ color: "#696969", fontSize: "14px" }}>
                FeelsLike
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ mt: "24px" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              backgroundColor: "white",
              width: "200px",
              padding: "16px",
              borderRadius: "24px",
              mx: "12px",
              alignItems: "center",
            }}
          >
            <Box
              sx={{ width: "42px", mr: "12px", height: "42px" }}
              component="img"
              src={Drop}
            />
            <Box>
              <Typography
                sx={{ fontWeight: "bold", color: "#3B3B3B", fontSize: "14px" }}
              >
                {humidity}%
              </Typography>
              <Typography sx={{ color: "#696969", fontSize: "14px" }}>
                Humidity
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              backgroundColor: "white",
              width: "200px",
              padding: "16px",
              borderRadius: "24px",
              mx: "12px",
              alignItems: "center",
            }}
          >
            <Box
              sx={{ width: "42px", mr: "12px", height: "42px" }}
              component="img"
              src={Tornado}
            />
            <Box>
              <Typography
                sx={{ fontWeight: "bold", color: "#3B3B3B", fontSize: "14px" }}
              >
                {kmPerHourWind} km/h
              </Typography>
              <Typography sx={{ color: "#696969", fontSize: "14px" }}>
                Wind
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Widgets;
