import { Box, Button, TextField } from "@mui/material";
import { Search } from "../icons/search";
import { useState } from "react";

type Props = {
  fetchWeather: (city: string) => void
}

const Header = ({fetchWeather}: Props) => {

  const [searchCity, setSearchCity] = useState<string>('');

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: 'center',
        width: "100%",
        flexDirection: "column",
        mt: '24px'
      }}
    >
      <Box sx={{ display: "flex", width: '100%' }}>
        <TextField
          value={searchCity}
          onChange={e => setSearchCity(e.target.value)}
          sx={{ width: "100%" }}
          variant="outlined"
          label="Enter your location and search"
          autoComplete="off"
        />
        <Button
        onClick={() => {searchCity && fetchWeather(searchCity) }}
          sx={{ ml: "12px", backgroundColor: "white", boxShadow: "none",borderRadius: '18px', "&:hover": {backgroundColor: 'white', borderRadius: '18px'} }}
          variant="contained"
        >
          <Search />
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
