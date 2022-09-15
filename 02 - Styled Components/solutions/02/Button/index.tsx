import React from "react";
import styled from "styled-components";

interface ButtonProps {
    children?: React.ReactNode;
}

const ButtonStyled = styled.button`
    background-color: var(--yellow);
    border: 2px solid var(--black);
    border-radius: 100px;
    padding: 24px 40px;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: var(--black);

    :hover {
        background-color: var(--yellowDark);
    }
`;

const Button = (props: ButtonProps) => {
    return <ButtonStyled>{props.children}</ButtonStyled>;
};

export default Button;
