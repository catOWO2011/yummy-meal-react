import React from "react";
import { Outlet } from "react-router-dom";

import {
  NavigationContainer,
  NavigationLink,
  NavigationLinkContainer,
  NavigationTitle,
} from "./Navigation.styles";

export default function Navigation() {
  return (
    <React.Fragment>
      <NavigationContainer>
        <NavigationTitle>Yummy Meals</NavigationTitle>
        <NavigationLinkContainer>
          <NavigationLink>Search</NavigationLink>
        </NavigationLinkContainer>
      </NavigationContainer>
      <Outlet />
    </React.Fragment>
  );
}
