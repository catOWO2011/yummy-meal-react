import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  position: sticky;
  top: 0;
  background: #FFDCB6;
  z-index: 15;
  border-top: solid 2px #ffddb5;
  border-bottom: solid 2px #ffddb5;
  margin: 10px 0px;
`;

export const NavigationTitle = styled(Link)`
  font-size: 42px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: #C63D2F;
  font-family: "Merienda";
  text-shadow: -3px 3px 0px #FF9B50 ;
`;

export const NavigationLinkContainer = styled.nav`
  width: 400px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 90%;
  background: #ffddb5;
  padding: 10px;
  ${"" /* border-radius: 0px 10px 10px 0px; */}

  svg {
    height: 30px;
    width: 100%;
  }
`;

export const NavigationLink = styled(Link)`
  text-decoration: none;
  color: #e64750;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  font-family: "Merienda";
`;

export const LogoContainer = styled.div`
  height: 70px;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;
