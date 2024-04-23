import LightModeIcon from "@mui/icons-material/LightMode";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Digital = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const isDayTime = () => {
    const hours = time.getHours();
    return hours >= 6 && hours < 18;
  };

  return (
    <>
      <Stack spacing={1} alignItems="center">
        {isDayTime() ? (
          <LightModeIcon sx={{ color: "orange", fontSize: "45px" }} />
        ) : (
          <Brightness3Icon sx={{ color: "white", fontSize: "45px" }} />
        )}
        <Typography variant="h5" color="#fff">
          {time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </Typography>
      </Stack>
    </>
  );
};

export default Digital;
