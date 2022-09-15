import React from "react";
import styled from "styled-components";

interface ButtonProps {
    children?: React.ReactNode;
    inverted?: boolean;
}

const ButtonStyled = styled.button<Pick<ButtonProps, "inverted">>`
    background-color: var(
        ${(props) => (props.inverted ? "--black" : "--yellow")}
    );
    border: 2px solid var(--black);
    border-radius: 100px;
    padding: 24px 40px;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: var(${(props) => (props.inverted ? "--yellow" : "--black")});

    :hover {
        background-color: var(--yellowDark);
    }
`;

const Button = (props: ButtonProps) => {
    return (
        <ButtonStyled inverted={props.inverted}>{props.children}</ButtonStyled>
    );
};

Button.defaultProps = {
    inverted: false,
};

export default Button;
