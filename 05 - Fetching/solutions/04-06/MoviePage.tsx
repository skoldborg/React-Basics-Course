import React from "react";
import styled from "styled-components";

import MovieCard from "../components/MovieCard";
import Row from "../components/Row";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";

const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

type Movie = {
    title: string;
    poster_path: string;
    release_date: string;
};

interface MovieDBResponse {
    page: number;
    results: [Movie];
}

function MoviePage() {
    const {
        REACT_APP_TMDB_API_ENDPOINT: apiEndpoint,
        REACT_APP_TMDB_API_KEY: apiKey,
        REACT_APP_TMDB_IMAGE_ENDPOINT: imageEndpoint,
    } = process.env;

    const [searchInput, setSearchInput] = React.useState("");
    const [movies, setMovies] = React.useState<Movie[]>([]);

    React.useEffect(() => {
        const url = `${apiEndpoint}/search/movie?api_key=${apiKey}&language=en-US&query=${searchInput}&page=1`;

        if (searchInput !== "") {
            const fetchMovies = async () => {
                const r = await fetch(url);
                const data: MovieDBResponse = await r.json();

                setMovies(data.results);
            };
            fetchMovies().catch((e) => console.error(e));
        } else {
            setMovies([]);
        }
    }, [searchInput]);

    return (
        <>
            <Header>
                <SearchInput onChange={(e) => setSearchInput(e.target.value)} />
            </Header>
            <Wrapper>
                <Row columnCount={5} columnGap="16px" rowGap="32px">
                    {/* Render movies here */}
                </Row>
            </Wrapper>
        </>
    );
}

export default MoviePage;
