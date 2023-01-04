import styled from "styled-components";
import Navbar from "../Navbar";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const StyledNavbar = styled(Navbar)`
  flex-shrink: 0;
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
`;
