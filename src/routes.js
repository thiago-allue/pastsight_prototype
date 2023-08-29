import {useRoutes} from "react-router-dom";
import { SignIn } from "./pages/signIn";
import { InputScreen } from "./pages/input";
import React from "react";

let element = useRoutes([
    { path: "/", element: <SignIn /> },
    { path: "/input", element: <InputScreen /> },
  ]);

export default element;
