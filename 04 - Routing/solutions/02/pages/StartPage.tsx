import React from "react";
import ButtonLink from "../components/ButtonLink";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

function MoviePage() {
    return (
        <Wrapper>
            <h1>We'll Always Have Film</h1>
            <ButtonLink to="/movies">Till utbudet</ButtonLink>
        </Wrapper>
    );
}

export default MoviePage;
