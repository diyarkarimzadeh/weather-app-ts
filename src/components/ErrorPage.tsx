import { Box, Typography } from "@mui/material";
import ErrorImage from '../assets/errorImage.png'

const ErrorPage = () => {
  return (
    <Box sx={{mt: '24px'}}>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', flexDirection: 'column' }}>
        <Box
          component="img"
          src={ErrorImage}
          sx={{ height: '240px' }}
        />
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#3B3B3B",
          }}
        >
          Sorry, We couldn't find the city.
        </Typography>
      </Box>
    </Box>
  );
};

export default ErrorPage;
