"use client";

import { REGISTER } from "@/lib/redux/service/users/register/register";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    dispatch(REGISTER(register))
      .then((response) => {
        Swal.fire("Register Success!", "success");
        //  window.localStorage.setItem(`token`, )
        dispatch(CHECK_AUTH(res?.data));
        window.localStorage.setItem(`token`, res?.data?.token);

        router.push(`/home`, { search: res?.data?.userId });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Register Failed!",
          text: "Please check your field cant be empty!",
        });
      });
  };

  return (
    <div className="w-full flex flex-col gap-[36px] mb-[12px]">
      <TextField
        name="firstName"
        value={register.firstName}
        onChange={handleChange}
        className="w-full h-[36px]"
        required
        id="filled-required"
        label="First name"
        variant="filled"
      />
      <TextField
        name="lastName"
        value={register.lastName}
        onChange={handleChange}
        className="w-full h-[36px]"
        required
        id="filled-required"
        label="Last name"
        variant="filled"
      />
      <TextField
        name="email"
        value={register.email}
        onChange={handleChange}
        className="w-full h-[36px]"
        required
        id="filled-required"
        label="Email"
        variant="filled"
      />

      <TextField
        name="phoneNumber"
        value={register.phoneNumber}
        onChange={handleChange}
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
          name="password"
          value={register.password}
          onChange={handleChange}
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

      <Button
        onClick={handleSubmit}
        variant="contained"
        className="w-full h-[42px] bg-cyan-500"
      >
        Register
      </Button>
    </div>
  );
}

export default Register;
