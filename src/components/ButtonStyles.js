import styled from "styled-components";
import {buttonTheme} from "../theme";


export const ButtonStyled = styled.button`
  background-color: ${({ theme }) => buttonTheme.$backgroundColor};
  color: ${({ theme }) => buttonTheme.$color};
  margin: ${({ theme }) => buttonTheme.$margin};
  border: ${({ theme }) => buttonTheme.$border};
  border-radius: ${({ theme }) => buttonTheme.$borderRadius};
  height: 50px;
  width: 150px;
  font-weight: 700;
  font-size: 20px;

  :hover {
    background-color: ${({ theme }) => buttonTheme.$color};
    color: ${({ theme }) => buttonTheme.$backgroundColor};
    cursor: pointer;
  }
`;

