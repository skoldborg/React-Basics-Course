import React from "react";

interface ButtonProps {
    children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = (props) => {
    return <button>{props.children}</button>;
};

export default Button;