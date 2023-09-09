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
          <NavigationLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            Search
          </NavigationLink>
        </NavigationLinkContainer>
      </NavigationContainer>
      <Outlet />
    </React.Fragment>
  );
}
