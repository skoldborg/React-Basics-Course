import React from "react";
import styled from "styled-components";

interface GridProps {
    children?: React.ReactNode;
    columnCount?: number;
}

const GridStyled = styled.div<Pick<GridProps, "columnCount">>`
    display: grid;
    grid-template-columns: repeat(${(props) => props.columnCount ?? 5}, 1fr);
`;

const Grid = ({ children, ...rest }: GridProps) => {
    return <GridStyled {...rest}>{children}</GridStyled>;
};

export default Grid;
