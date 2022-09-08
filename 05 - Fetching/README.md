[<img src="https://media.giphy.com/media/CAxbo8KC2A0y4/giphy.gif" width="100%">](https://reactrouter.com/)

# 05 - Fetching

In this final lesson we will finish up our movie database app. We'll add some search functionality to the movies page and hook that up to an API, so that we can actually show some dynamic data to our users.

## Assignments

1. We're going to be using [The Movie Database API](https://www.themoviedb.org/) as the search service for our movies. To use this API you need to create an account and request an API key.

    - Go to [The Movie Database API](https://www.themoviedb.org/) and click "Join TMDB" in the header.
    - Create and account and verify it with your email, then login to your account.
    - Click your avatar in the header (a ring with your first initial in it) and go to "Settings".
    - Go to the "API" section in left navigation and then click the link under "Request an API key".
    - Answer the question, accept the terms, and fill out the application info.
    - Once you hit "Submit" you will find your API key on the next page under "API Key (v3 Auth)"

2. Now we need to add our new API key and some other stuff to our environment variables, so we can both keep them safe and have access to them throughout our app.

    - Create a `.env` file in the root of your project.
    - Add these two keys to it

    ```
    REACT_APP_TMDB_API_KEY=YOUR_TMDB_API_KEY
    REACT_APP_TMDB_API_ENDPOINT=https://api.themoviedb.org/3
    REACT_APP_TMDB_IMAGE_ENDPOINT=https://image.tmdb.org/t/p/w500/

    ```

    Now these three variables will be available to us anywhere in our application through the `process.env` object. Eg:

    ```tsx
    console.log(process.env.REACT_APP_TMDB_API_ENDPOINT);

    // https://api.themoviedb.org/3
    ```

3. That's the setup taken care of, now let's build our search. First off, we need a search input to be able to provide a query to the API.

    Create a `SearchInput` component. It should be a real input field of the type "search" and it should accept an `onChange` handler as a prop.

    Here's how it should look in the implementation

    ```tsx
    // file: MoviePage.tsx
    <Header>
        <SearchInput onChange={(e) => setSearchInput(e.target.value)} />
    </Header>
    ```

    You can read more about how `onChange` handlers work [here](https://upmostly.com/tutorials/react-onchange-events-with-examples).

## Resources

-   :books: Documentation

    -   [Using the useEffect hook](https://reactjs.org/docs/hooks-effect.html)

    -   [The Movie Database API docs](https://developers.themoviedb.org/3)

    -   [Adding environment variables to CRA](https://create-react-app.dev/docs/adding-custom-environment-variables/)

    -   [Setting attributes on a styled component](https://styled-components.com/docs/api#attrs)

-   :link: Links

    -   [How to use async functions in useEffect](https://devtrium.com/posts/async-functions-useeffect)

-   :art: Design
    -   [Figma project](https://www.figma.com/file/m37G0gJ3VjICyGLGTWsxyh/FE-Edu-Challenge---2022?node-id=2%3A122).
