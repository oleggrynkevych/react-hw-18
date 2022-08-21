import styled from "styled-components";
import { buttonTheme } from "../theme";

export const HomePageStyles = styled.div`
  color: ${({ theme }) => buttonTheme.$backgroundColor};
  height: 80vh;
  font-size: 40px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`