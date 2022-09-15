import React from "react";
import styled from "styled-components";

interface MovieCardProps {
    image: string;
    title: string;
    details: string;
}

const MovieCardStyled = styled.figure`
    width: 100%;
    max-width: 227px; // Until we have a grid
    aspect-ratio: 227 / 325;
`;

const MovieCardImage = styled.div`
    position: relative;
    height: 100%;
    margin-bottom: 16px;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const MovieCardTitle = styled.h2`
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
`;

const MovieCardDetails = styled.p`
    font-size: 12px;
    line-height: 20px;
`;

const MovieCard = (props: MovieCardProps) => {
    return (
        <MovieCardStyled>
            <MovieCardImage>
                <img src={props.image} alt={props.title} />
            </MovieCardImage>
            <MovieCardTitle>{props.title}</MovieCardTitle>
            <MovieCardDetails>{props.details}</MovieCardDetails>
        </MovieCardStyled>
    );
};

// Usage:
// <MovieCard title="Flash Gordon" details="USA, 120 min" image={poster} />

export default MovieCard;
