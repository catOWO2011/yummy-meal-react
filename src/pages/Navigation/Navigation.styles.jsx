import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 15;
`;

export const NavigationTitle = styled(Link)`
  font-size: 42px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: #ffddb5;
  font-family: "Merienda";
  text-shadow: -1px 3px 0px #e54750;
`;

export const NavigationLinkContainer = styled.nav`
  width: 400px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 90%;

  svg {
    height: 30px;
    width: 100%;
  }
`;

export const NavigationLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  height: 70px;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;
