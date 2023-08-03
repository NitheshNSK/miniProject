//Card - jsx

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Stack } from "@mui/material";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 275, my: 2 }}>
      <CardContent>
        <CardMedia
          sx={{ height: 80, width: 80 }}
          image={`${props.props.current.condition.icon}`}
          title="green iguana"
        />
        <Stack direction="row" justifyContent="space-between">
          <Typography>Temperature</Typography>
          <Typography>
            {props.props.current.temp_c}°C / {props.props.current.temp_f}°F
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography>Condition</Typography>
          <Typography>{props.props.current.condition.text}</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography>Wind Speed</Typography>
          <Typography>{props.props.current.wind_kph}km/h</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography>Humidity</Typography>
          <Typography>{props.props.current.humidity}%</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography>Cloud Coverage </Typography>
          <Typography>{props.props.current.cloud}%</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Typography>Last Updated </Typography>
          <Typography>{props.props.current.last_updated}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

//Container hold card

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { LocationCity } from "@mui/icons-material";
export default function SimpleContainer() {
  const [loacationText, setLoacation] = useState(null);
  const [DebounceId, setDebounce] = useState();
  const [data, setData] = useState(null);
  // useEffect(()=>{
  //     //console.log(loacationText);
  //     Search(loacationText);
  // },[loacationText])
  const Search = async (Stext) => {
    try {
      let res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=090c7076c9b04b5b98462132232807&q=${Stext}&aqi=no`
      );
      setData(res.data);
    } catch (e) {
      setData(null);
    } finally {
    }
  };
  const Debounce = (e, DebounceTimeId) => {
    if (DebounceTimeId) {
      clearTimeout(DebounceTimeId);
    }

    const timeId = setTimeout(async () => {
      Search(e.target.value);
    }, 1000);
    setDebounce(timeId);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Box sx={{ width: "80vh", my: 2 }}>
            <TextField
              fullWidth
              onChange={(e) => {
                Debounce(e, DebounceId);
              }}
              id="outlined-basic"
              label="Enter location"
              variant="outlined"
            />
            {data ? (
              <>
                <Typography variant="h5">{data.location.region}</Typography>
                <Card props={data} />
              </>
            ) : (
              <>
                <Typography sx={{ my: 3, color: "red" }} variant="h4">
                  No matching Found
                </Typography>
              </>
            )}
          </Box>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

//Header -app

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
