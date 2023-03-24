import { Box, Typography } from "@mui/material";

type Props = {
  city?: string,
  country?: string,
  icon?: string,
  weatherDescription?: string,
  temp?: number
}

const Main = ({ city, country, icon, weatherDescription, temp }: Props) => {

  const celsiusTemp: number = Math.round(temp! - 273.15);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: '24px' }}>
      <Box>
        <Box
          component="img"
          src={require(`../assets/${icon}.png`)}
          sx={{ height: '240px' }}
        />
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "32px",
            fontWeight: "bold",
            color: "#3B3B3B",
          }}
        >
          {city}, {country}
        </Typography>
        <Typography
          sx={{ textAlign: "center", fontWeight: "500", color: "#696969" }}
        >
          {celsiusTemp}.0 °C {weatherDescription}
        </Typography>
      </Box>
    </Box>
  );
};

export default Main;
