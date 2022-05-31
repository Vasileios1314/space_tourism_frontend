import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function DestinationCard(props) {
  const { id, name, description, distance, travel, imgUrl } = props;
  return (
    <Card sx={{ maxWidth: 345 }} key={id}>
      <CardActionArea>
        <CardMedia component="img" height="180" src={imgUrl} alt="planet" />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {distance}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {travel}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
