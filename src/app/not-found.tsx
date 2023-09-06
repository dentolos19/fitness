import { Box, Typography, } from "@mui/material";

export default function NotFound() {
  return (
    <Box textAlign={"center"} marginTop={4}>
      <Typography variant={"h5"}>404</Typography>
      <Typography marginTop={2}>The page that you're looking for does not exist.</Typography>
    </Box>
  );
}