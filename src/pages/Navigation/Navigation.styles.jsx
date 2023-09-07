import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 64px 0;
`;

export const NavigationTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

export const NavigationLinkContainer = styled.nav`
  width: 400px
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 90%
  margin: 0 auto;
`;

export const NavigationLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
