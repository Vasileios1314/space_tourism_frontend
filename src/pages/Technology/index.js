import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTechnology } from "../../store/technology/actions";
import { selectTechnology } from "../../store/technology/selectors";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Keyboard } from "swiper";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

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
        <Grid container>
          <Grid item container xs={12} justifyContent="center">
            <Grid item xs={3}>
              <Card sx={{ backgroundColor: "transparent" }}>
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, Keyboard]}
                  spaceBetween={5}
                  slidesPerView={1}
                  navigation
                  keyboard
                  loop
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                >
                  {technology.map((technology) => {
                    return (
                      <SwiperSlide key={technology.id}>
                        <Typography
                          gutterBottom
                          variant="h3"
                          component="div"
                          style={{
                            color: "white",
                            fontFamily: "monospace",
                            letterSpacing: ".1rem",
                          }}
                        >
                          {technology.name}
                        </Typography>
                        <CardMedia
                          sx={{ borderRadius: 5 }}
                          component="img"
                          height="600"
                          alt="planet"
                          src={technology.imgUrl}
                        />

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
                          {technology.description}
                        </Typography>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
