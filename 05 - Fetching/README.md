[<img src="https://media.giphy.com/media/XBEoaajXTXaALzawSn/giphy.gif" width="100%">](https://reactrouter.com/)

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

    - Create a `SearchInput` component in your `components` folder. It should be a real input field of the type "search" and it should accept an `onChange` handler as a prop.

        Here's how it should look in the implementation:

        ```tsx
        // file: MoviePage.tsx
        <Header>
            <SearchInput onChange={(e) => console.log(e.target.value)} />
        </Header>
        ```

        You can read more about how `onChange` handlers work [here](https://upmostly.com/tutorials/react-onchange-events-with-examples). If you've implemented the `SearchInput` correctly you should see the query string printed out in the console as you type in the input field.

        Extra points will be awarded to the dev that adds the correct TypeScript type to the `onChange` prop :wink:

4. Right, we can now get a search query from our users, but we're only logging it to the console. We need to add it to our app's state in order to use it.

    - Add a new new state, using [hooks](https://reactjs.org/docs/hooks-reference.html), to `MoviePage.tsx` called `searchInput`. Set its default value to an empty string.
    - Replace the `console.log` statement with your state hook.

5. In order to read the value of `searchInput` as it updates we need something that listens to changes, or _effects_. Luckily there' a hook for that!

    - Add a [useEffect hook](https://reactjs.org/docs/hooks-effect.html) below your state hook and add `searchInput` to its dependency array. `useEffect` will now run on mount (when the component is ready) and every time the `searchInput` state changes.
    - Inside the useEffect hook we can just add a `console.log` for now. Check your console to see that it's working, you should get the same behaviour as when you had the log inside the `onChange` handler.

6. We have our query state hooked up and we can listen to when it updates. Time to fetch some movies!

    - Declare a new state, call it `movies`, and set it's initial value to `[]`. This will hold our movies once they're fetched.
    - Declare a fetch method inside the `useEffect` function, here's a useful [guide](https://devtrium.com/posts/async-functions-useeffect#note-on-fetching-data-inside-useeffect).
    - TMDB provides many (many) endpoints for their data. The endpoint for fetching movies by title looks like this:
      `https://api.themoviedb.org/3/search/movie?api_key=API_KEY&language=en-US&query=MOVIE_TITLE&page=1`
    - Use your `searchInput`, `REACT_APP_TMDB_API_ENDPOINT`, and `REACT_APP_TMDB_API_KEY` variables to construct this URL inside the `useEffect`.
    - Once you have the movie data fetched and ready you should use your state hook to update the `movies` array.
        > Note: Inspect the result from the API to see how it's formatted, we're only interested in the array of movies

7. Almost there! We can fetch movies based on our user's query and we have the result stored neatly in array. Now all that's left is to render it.

    - Use [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to [loop over](https://stackabuse.com/how-to-loop-in-react-jsx/) the movies in `MoviePage.tsx`'s render method. For each movie you should render a `<MovieCard />` and pass the relevant values as [props](https://reactjs.org/docs/components-and-props.html) to the component.
        > Note: We're getting a URL for our movie posters in the `poster` variable, but it's incomplete. Prepend your `REACT_APP_TMDB_IMAGE_ENDPOINT` to it to make the URL complete.

8. **Extra:** Right now the app runs an empty query every time `MoviePage` loads. You can fix this by checking if `searchInput` is an empty string and only running the fetch _if_ it isn't. If `searchInput` is empty, you can set the `movies` state to an empty array, allowing our users to clear their search.

9. **Extra:** We have working application! :tada: But the designer is not happy :pensive: Use your Front End skillz to make your application match the design!

## Resources

-   :books: Documentation

    -   [Using the useEffect hook](https://reactjs.org/docs/hooks-effect.html)

    -   [Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

    -   [The Movie Database API docs](https://developers.themoviedb.org/3)

    -   [Adding environment variables to CRA](https://create-react-app.dev/docs/adding-custom-environment-variables/)

    -   [Setting attributes on a styled component](https://styled-components.com/docs/api#attrs)

-   :link: Links

    -   [How to use async functions in useEffect](https://devtrium.com/posts/async-functions-useeffect)

-   :art: Design
    -   [Figma project](https://www.figma.com/file/m37G0gJ3VjICyGLGTWsxyh/FE-Edu-Challenge---2022?node-id=2%3A122).
