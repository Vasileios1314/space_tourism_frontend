import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function CrewCard(props) {
  const { id, name, bio, role, imgUrl } = props;
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "transparent" }} key={id}>
      <CardActionArea>
        <CardMedia component="img" height="350" src={imgUrl} alt="planet" />

        <CardContent
          style={{
            color: "white",
            fontFamily: "monospace",
            letterSpacing: ".1rem",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              color: "white",
              fontFamily: "monospace",
              letterSpacing: ".1rem",
            }}
          >
            {role}
          </Typography>

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
            {name}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{
              color: "white",
              fontFamily: "monospace",
              letterSpacing: ".1rem",
            }}
          >
            {bio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
