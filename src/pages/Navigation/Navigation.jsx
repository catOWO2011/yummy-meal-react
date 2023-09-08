import React from "react";
import { Outlet } from "react-router-dom";

import {
  Logo,
  LogoContainer,
  NavigationContainer,
  NavigationLink,
  NavigationLinkContainer,
  NavigationTitle,
} from "./Navigation.styles";
import chefIcon from "../../assets/img/chef.avif";

export default function Navigation() {
  return (
    <React.Fragment>
      <NavigationContainer>
        <NavigationTitle to="/">
          <LogoContainer>
            <Logo src={chefIcon} />
          </LogoContainer>
          Yummy Meals
        </NavigationTitle>
        <NavigationLinkContainer>
          <NavigationLink>Search</NavigationLink>
        </NavigationLinkContainer>
      </NavigationContainer>
      <Outlet />
    </React.Fragment>
  );
}
