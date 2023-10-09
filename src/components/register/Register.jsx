"use client";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";

import React, { useState } from "react";

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full flex flex-col gap-[36px] h-full">
      <TextField
        className="w-full h-[36px]"
        required
        id="filled-required"
        label="First name"
        variant="filled"
      />
      <TextField
        className="w-full h-[36px]"
        required
        id="filled-required"
        label="Last name"
        variant="filled"
      />
      <TextField
        className="w-full h-[36px]"
        required
        id="filled-required"
        label="Email"
        variant="filled"
      />

      <TextField
        className="w-full h-[36px]"
        id="filled-number"
        label="Phone Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
      />

      <FormControl className="w-full h-[36px]">
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          className="w-full h-full"
          id="standard-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}

export default Register;
