import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { red } from "@mui/material/colors";

export default function HomeCard() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh", marginLeft: "-400px", marginTop: "100px" }}
    >
      <Grid xs={6}>
        <Card
          sx={{
            maxWidth: 345,
            display: "block",
            letterSpacing: ".3rem",
            backgroundColor: "transparent ",
            color: "whitesmoke",
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                style={{
                  color: "white",
                  fontFamily: "monospace",
                  letterSpacing: ".1rem",
                }}
              >
                So, you want to travel to
              </Typography>
              <Typography
                gutterBottom
                variant="h1"
                component="div"
                style={{
                  color: "white",
                  fontFamily: "monospace",
                  letterSpacing: ".1rem",
                }}
              >
                Space
              </Typography>
              <Typography
                variant="h5"
                color="whitesmoke"
                letterSpacing=".2rem"
                fontFamily="monospace"
              >
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
