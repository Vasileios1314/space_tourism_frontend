import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCrew } from "../../store/crew/actions";
import { selectCrew } from "../../store/crew/selectors";
import CrewCard from "../../components/CrewCard";

export default function Crew() {
  const dispatch = useDispatch();
  const crew = useSelector(selectCrew);

  useEffect(() => {
    dispatch(setCrew());
    console.log("response", crew);
  }, [dispatch]);

  if (!crew) return "Loading...";

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
        02 MEET YOUR CREW
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
          {crew.map((crew) => {
            return (
              <Grid item xs={2} sm={4} md={6} key={crew.id}>
                <CrewCard
                  key={crew.id}
                  id={crew.id}
                  name={crew.name}
                  imgUrl={crew.imgUrl}
                  role={crew.role}
                  bio={crew.bio}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}
