import {useRoutes} from "react-router-dom";
import {SignIn} from "./pages/signIn";
import {InputScreen} from "./pages/input";
import React from "react";

export function RoutesComponent() {
  return useRoutes([
    {path: "/", element: <SignIn/>},
    {path: "/input", element: <InputScreen/>},
  ]);
}