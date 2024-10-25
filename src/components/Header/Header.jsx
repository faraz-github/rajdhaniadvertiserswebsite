import { Container, Stack, AppBar, Box, Toolbar } from "@mui/material";

import Links from "./Links";
import Brand from "./Brand";
import NavigationMenu from "./NavigationMenu";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Container disableGutters>
            <Stack direction={"row"} alignItems={"center"}>
              <Brand />
              <Box sx={{ flexGrow: 1 }} />
              <Box
                sx={{
                  display: {
                    md: "block",
                    xs: "none",
                  },
                }}
              >
                <Links />
              </Box>
              <Box
                sx={{
                  display: {
                    md: "none",
                    xs: "block",
                  },
                }}
              >
                <NavigationMenu />
              </Box>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
