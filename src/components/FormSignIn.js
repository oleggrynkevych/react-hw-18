import { Form, FormContainer, LogoDiv, Logo, Title, FormInput, Input, FormCheckBox, CheckBox, CheckBoxText, Button, TextBlockForSignIn, QuestionText, FooterText } from "./FormSignStyles";
import Image from "./padlock.png";
import { useState } from "react";

export default function SignIn () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    
    const handlerSubmit = () => {
        if (userInfo.email == email && userInfo.password == password) {
            window.open("/", "_self");
       } else {
            alert ("Користувача не знайдено");
        }
    }

    return (
        <div>
            <Form>
                <FormContainer>
                    <LogoDiv>
                        <Logo src={Image}></Logo>
                    </LogoDiv>
                    <Title>SIGN IN</Title>
                    <FormInput>
                        <Input
                            type="email" 
                            placeholder="Email Address ﹡"
                            onChange={(e) => setEmail(e.target.value)}
                            ></Input>
                        <Input
                            type="password" 
                            placeholder="Password ﹡"
                            onChange={(e) => setPassword(e.target.value)}
                        ></Input>
                    </FormInput>
                    <FormCheckBox>
                        <CheckBox 
                            type="checkbox"
                        ></CheckBox>
                        <CheckBoxText>Remember me</CheckBoxText>
                    </FormCheckBox>
                    <Button onClick={handlerSubmit}>SIGN IN</Button>
                    <TextBlockForSignIn>
                        <QuestionText to="/signin">Forgot password?</QuestionText>
                        <QuestionText to="/signup"> Don`t have an account? Sign Up</QuestionText>
                    </TextBlockForSignIn>
                    <FooterText>Copyright © Your Website 2020.</FooterText>
                </FormContainer>
            </Form>
        </div>   
    )
}

