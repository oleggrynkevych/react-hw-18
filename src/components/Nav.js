import { NavLink } from "react-router-dom";
import { ButtonStyled } from "./ButtonStyles";


export default function Nav () {
    const NavStyled = {display: `flex`, flexDiraction: `row`};
    return (
        <div style={NavStyled}>
            <NavLink to="/signin"><ButtonStyled>SIGN IN</ButtonStyled></NavLink>
            <NavLink to="/signup"><ButtonStyled>SIGN UP</ButtonStyled></NavLink>
        </div>
    )
}