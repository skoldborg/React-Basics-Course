import React from "react";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import Grid from "../components/Grid";
import poster from "../assets/posters/flash-gordon.jpeg";

const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

function MoviePage() {
    return (
        <Wrapper>
            <Grid columnCount={5} columnGap="16px" rowGap="32px">
                <MovieCard
                    title="Flash Gordon"
                    details="USA, 120 min"
                    image={poster}
                />
                <MovieCard title="ET" details="USA, 120 min" image={poster} />
                <MovieCard
                    title="Jurassic Park"
                    details="USA, 120 min"
                    image={poster}
                />
                <MovieCard title="Jaws" details="USA, 120 min" image={poster} />
                <MovieCard
                    title="Chaos in Seattle"
                    details="USA, 120 min"
                    image={poster}
                />
            </Grid>
        </Wrapper>
    );
}

export default MoviePage;
