import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.div`
    height: 80vh;
    width: 100vw;    
`;

export const FormContainer = styled.div`
    height: auto;
    width: 30%;
    background-color: #0000cc;
    margin: 4% auto 0 auto;
    padding: 2%;
`;

export const LogoDiv = styled.div`
    height: 70px;
    width: 70px;
    background-color: #ff4dc4;
    margin: 0 auto 0 auto;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.img`
    height: 60%;
    width: 60%;
`;

export const Title = styled.h2`
    color: #ff4dc4;
    font-size: 20px;
    text-align: center;
`;

export const FormInput = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    background-color: #0000cc;
    color: #ff4dc4;
    border: 3px solid #ff4dc4;
    padding: 10px;
    width: auto;
    border-radius: 10px;
    margin-bottom: 20px;

    ::placeholder{
        color: #ff4dc4;
      }
    
    input, select, textarea{
        color: #ff4dc4;
    }
    
    :focus{
        outline: none;
        border-color: #ff4dc4; 
    }
`;

export const FormCheckBox = styled.div`
    display: flex;
    flex-diraction: row;
    align-items: center;
    margin-bottom: 20px;
`;

export const CheckBox = styled.input`
position: relative; 
width: 15px; 
height: 15px; 
top: 0; 
outline: 2px solid #ff4dc4;
margin-right: 15px;
`;

export const CheckBoxText = styled.p`
    font-size: 15px;
    font-weight: 700;
    color: white;
`;

export const Button = styled.button`
    width: 100%;
    padding: 4%;
    background-color: #ff4dc4;
    color: black;
    border-radius: 10px;
    margin-bottom: 10px;
    border: none;
    font-size: 15px;
    font-weight: 700;

    :hover{
        color: white;
        cursor: pointer;
    }

    :clicked{
        color: white;
    }
`;

export const TextBlockForSignIn = styled.div`
    display: flex;
    justify-content: space-between;
    width: 98%;
    margin-bottom: 20px;

`;

export const TextBlockForSignUp = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 98%;
    margin-bottom: 20px;
`;

export const QuestionText = styled(Link)`
    color: #ff4dc4;
    text-decoration: none;

    :hover{
        color: white;
        cursor: pointer;
    }
`;

export const FooterText = styled.p`
    color: black;
    font-size: 10px;
    text-align: center;
`;

export const InputBlock = styled.div`
    display: flex;
    justify-content: space-between;
    width: auto;
    margin-bottom: 10px;
`;

