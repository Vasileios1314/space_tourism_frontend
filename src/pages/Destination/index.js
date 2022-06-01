import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DestinationCard from "../../components/DestinationCard";
import { setDestination } from "../../store/destination/actions";
import { selectDestinations } from "../../store/destination/selectors";

export default function Destination() {
  const dispatch = useDispatch();
  const destination = useSelector(selectDestinations);

  useEffect(() => {
    dispatch(setDestination());
    console.log("response", destination);
  }, [dispatch]);

  if (!destination) return "Loading...";

  return (
    <div>
      <h1
        style={{
          color: "white",
          fontFamily: "monospace",
          letterSpacing: ".5rem",
          padding: "50px",
        }}
      >
        01 PICH YOUR DESTINATION
      </h1>
      <div>
        <Grid
          container
          alignItems="center"
          style={{
            alignItems: "center",
            marginLeft: 200,
            marginBottom: 40,
          }}
          spacing={{ xs: 2, md: 4 }}
        >
          {destination.map((destination) => {
            return (
              <Grid item xs={2} sm={4} md={6} key={destination.id}>
                <DestinationCard
                  key={destination.id}
                  id={destination.id}
                  name={destination.name}
                  imgUrl={destination.imgUrl}
                  description={destination.description}
                  distance={destination.distance}
                  travel={destination.travel}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}
