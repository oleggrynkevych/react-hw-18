import { Form, FormContainer, LogoDiv, Logo, Title, FormInput, InputBlock, Input, FormCheckBox, CheckBox, CheckBoxText, Button, TextBlockForSignUp, QuestionText, FooterText } from "./FormSignStyles";
import Image from "./padlock.png";
import { useState } from "react";

export default function SignUp () {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [wrongEmail, setWrongEmail] = useState(true);
    const [wrongPassword, setWrongPassword] = useState(true);
    const [wrongName, setWrongName] = useState(true);

    const validName = /[a-zA-Z0-9_]{3,}/g;
    const validEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    const handlerSubmit = () => {
        const userInfo ={
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }

        localStorage.setItem("userInfo", JSON.stringify(userInfo));

        window.open("/", "_self");
    }

    const checkFirstName = (e) => {
        setFirstName(e.target.value);
        if (validName.test(String(e.target.value))) {
            e.target.style.border = `3px solid #83FC0D`;
            setWrongName(false);
        } else if (!e.target.value.length){
            e.target.style.border = `3px solid #ff4dc4`;
        } else {
            e.target.style.border = `3px solid #FF3D0D`;
        }
    }

    const checkLastName = (e) => {
        setLastName(e.target.value);
        if (validName.test(String(e.target.value))) {
            e.target.style.border = `3px solid #83FC0D`;
            setWrongName(false);
        } else if (!e.target.value.length){
            e.target.style.border = `3px solid #ff4dc4`;
        } else {
            e.target.style.border = `3px solid #FF3D0D`;
        }
    }

    const checkEmail = (e) => {
        setEmail(e.target.value);
        if (validEmail.test(String(e.target.value).toLowerCase())) {
            e.target.style.border = `3px solid #83FC0D`;
            setWrongEmail(false);
        } else if (!e.target.value.length){
            e.target.style.border = `3px solid #ff4dc4`;
        } else {
            e.target.style.border = `3px solid #FF3D0D`;
        }
    }

    const checkPassword = (e) => {
        setPassword(e.target.value);
        if (validPassword.test(String(e.target.value))) {
            e.target.style.border = `3px solid #83FC0D`;
            setWrongPassword(false);
        } else if (!e.target.value.length){
            e.target.style.border = `3px solid #ff4dc4`;
        } else {
            e.target.style.border = `3px solid #FF3D0D`;
        }
    }

    return (
        <Form>
            <FormContainer>
                <LogoDiv>
                    <Logo src={Image}></Logo>
                </LogoDiv>
                <Title>SIGN UP</Title>
                <FormInput>
                    <InputBlock>
                        <Input
                            type="text" 
                            placeholder="First Name ﹡"
                            onChange={checkFirstName}
                        ></Input>
                        <Input
                            type="text" 
                            placeholder="Last Name ﹡"
                            onChange={checkLastName}
                        ></Input>
                    </InputBlock>
                    <Input
                        type="email" 
                        placeholder="Email Address ﹡"
                        onChange={checkEmail}
                    ></Input>
                    <Input
                        type="password" 
                        placeholder="Password ﹡"
                        onChange={checkPassword}
                    ></Input>
                </FormInput>
                <FormCheckBox>
                    <CheckBox 
                        type="checkbox"
                        defaultChecked
                    ></CheckBox>
                    <CheckBoxText>I want to recive inspiration, marketing promotions and updates via email</CheckBoxText>
                </FormCheckBox>
                <Button onClick={handlerSubmit} disabled={wrongEmail && wrongPassword && wrongName ? "disabled" : null}>SIGN UP</Button>
                <TextBlockForSignUp>
                    <QuestionText to="/signin">Already have an account? Sign in</QuestionText>
                </TextBlockForSignUp>
                <FooterText>Copyright © Your Website 2020.</FooterText>
            </FormContainer>
        </Form>   
    )
}