import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TechnologyCard from "../../components/TechnologyCard";
import { setTechnology } from "../../store/technology/actions";
import { selectTechnology } from "../../store/technology/selectors";

export default function Technology() {
  const dispatch = useDispatch();
  const technology = useSelector(selectTechnology);

  useEffect(() => {
    dispatch(setTechnology());
    console.log("response", technology);
  }, [dispatch]);

  if (!technology) return "Loading...";

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
        03 SPACE LAUNCH
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
          {technology.map((technology) => {
            return (
              <Grid item xs={2} sm={4} md={3} key={technology.id}>
                <TechnologyCard
                  key={technology.id}
                  id={technology.id}
                  name={technology.name}
                  imgUrl={technology.imgUrl}
                  description={technology.description}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}
