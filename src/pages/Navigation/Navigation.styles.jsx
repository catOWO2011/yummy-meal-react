import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 64px 0;
`;

export const NavigationTitle = styled(Link)`
  font-size: 32px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

export const NavigationLinkContainer = styled.nav`
  width: 400px;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 90%;
`;

export const NavigationLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const LogoContainer = styled.div`
  height: 70px;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;
