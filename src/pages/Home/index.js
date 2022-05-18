// import { style } from "@mui/system";
import { Box, Button } from "@mui/material";
import React from "react";
import HomeCard from "../../components/HomeCard";
import "./styles.css";

export default function Home() {
  return (
    <div>
      <div>
        <HomeCard />
      </div>
      <div
        style={{
          marginLeft: "930px",
          marginTop: "-800px",
          paddingRight: "200px",
        }}
      >
        <Button
          variant="contained"
          href="/destination"
          sx={{
            borderRadius: "100%",
            padding: 30,
            paddingRight: 30,
            width: "60px",
            height: "60px",
            fontSize: "60px",
            fontWeight: "180px",
            background: "white",
            color: "black",
          }}
        >
          Explore!
        </Button>
      </div>
    </div>
  );
}
