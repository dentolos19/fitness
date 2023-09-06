"use client";

import { Button, Paper, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import EqualizeContainer from "./equalize-container";
import PageContainer from "./page-container";

export default function RequireLogin() {
  const router = useRouter();

  return (
    <PageContainer>
      <Paper
        sx={{
          maxWidth: 500,
          marginLeft: "auto",
          marginRight: "auto",
          padding: 2,
        }}
      >
        <Stack spacing={2}>
          <Typography variant={"h5"} align={"center"}>
            Anywhere Fitness
          </Typography>
          <Typography align={"center"}>You need to be logged in to view this page.</Typography>
          <EqualizeContainer>
            <Button variant={"contained"} onClick={() => router.push("/login")}>
              Login
            </Button>
            <Button variant={"outlined"} onClick={() => router.push("/register")}>
              Register
            </Button>
          </EqualizeContainer>
        </Stack>
      </Paper>
    </PageContainer>
  );
}