import { CHECK_AUTH } from "@/lib/redux/action/user/user";
import { LOGIN } from "@/lib/redux/service/users/login/login";
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
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const router = useRouter();

  const handleSubmit = (e) => {
    console.log(login);

    dispatch(LOGIN(login))
      .then((res) => {
        console.log(res);
        dispatch(CHECK_AUTH(res?.data));
        window.localStorage.setItem(`token`, res?.data?.token);

        router.push(`/home`, { search: res?.data?.userId });
      })
      .catch((err) => {
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: "Something went wrong!",
        // });
      });
  };

  const Checkuser = useSelector((state) => {
    return state.user;
  });

  return (
    <div className="w-full flex flex-col gap-[36px]">
      <TextField
        name="email"
        value={login.email}
        onChange={handleChange}
        className="w-full h-[42px]"
        required
        id="filled-required"
        label="Email"
        variant="filled"
      />
      <FormControl className="w-full h-[42px]">
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          name="password"
          value={login.password}
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
        className="w-full h-[42px] bg-cyan-700"
        variant="contained"
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
