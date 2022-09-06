[<img src="https://media.giphy.com/media/CAxbo8KC2A0y4/giphy.gif" width="100%">](https://reactrouter.com/)

# 04 - Routing

Time to make our Single Page Application support multiple pages! In todays lesson we'll how to use React Router to move between different components based on the URL.

## Assignments

1. First off - installation. React Router is actually a monorepo (a repo that holds many packages) that consists of:

    - [react-router-dom](https://github.com/remix-run/react-router/tree/main/packages/react-router-dom) - The browser version of React Router
    - [react-router-native](https://github.com/remix-run/react-router/tree/main/packages/react-router-native) - The React Native version of React Router
    - [react-router](https://github.com/remix-run/react-router/blob/main/packages/react-router) - Core functionality shared by both of the packages above

    We're on the web, so we're going to be using `react-router-dom`. Let's install it:

    ```sh
    npm i react-router-dom
    ```

    And let's not forget the types:

    ```sh
    npm i -D @types/react-router-dom
    ```

2. Next we will need to do some restructuring. `App.tsx` will be the entry point for our router and we want to support multiple pages, so let's create a `pages` folder under `src` and add a `MoviePage` component. Like this:

    ```
    - src
        - components
        - pages
            - MoviePage
                index.tsx
    ```

    Then move all of the code inside `App.tsx` to `MoviePage` (don't forget to rename the component).

    And finally let's create a `StartPage` component so our users have somewhere to land. This page can just be a `<h1>` with our app's title for now ("We'll Always Have Film").

3. We're ready to add some routes. `App.tsx` will be the entry point for our router. Follow this [guide](https://reactrouter.com/en/v6.3.0/getting-started/overview) and see if you can get it working!

4. That's the router, now let's add some links. Looking at the Figma design there's a link to the movies page on our start page. The link looks an awful lot like our `Button` component, but a button element _should not be used for links_.

    Create a new `ButtonLink` component that uses the same styles as `Button` but is a styled `Link` from `react-router-dom`, rather than a button element. Using `Link` in your styled component is as easy as:

    ```tsx
    import { Link } from "react-router-dom";

    const ButtonLinkStyled = styled(Link)`
        // Styles go here
    `;
    ```

    See if you can't figure out how to get the props for React router's `Link` to be a part of your `ButtonLink` (Hint: They're named `LinkProps`).

5. So now our users can navigate from the start page to the movies page. But then they're stuck :pensive:. Let's remedy that and at the same time expand on the look and feel of our app.

    In the Figma design there's a logo at the top of the page that's always there. That logo will be our users link to the start page.

    Create a `Header` and a `Logo` component. The `Header` component should just hold our `Logo` for now, and the `Logo` is just an image wrapped in a `Link`.

    Normally a header component would be rendered outside of the `Routes` so it doesn't have to rerender on every URL change, but this header varies between pages so we'll just render it at the top of both of them. Example:

    ```tsx
    function StartPage() {
        return (
            <>
                <Header />
                <Wrapper>
                    <h1>We'll Always Have Film</h1>
                    <ButtonLink to="/movies">Till utbudet</ButtonLink>
                </Wrapper>
            </>
        );
    }
    ```

## Resources

-   :books: Documentation

    -   [Getting started with React Router](https://reactrouter.com/en/v6.3.0/getting-started/overview)

    -   [The Link component](https://v5.reactrouter.com/web/api/Link)

-   :art: Design
    -   [Figma project](https://www.figma.com/file/m37G0gJ3VjICyGLGTWsxyh/FE-Edu-Challenge---2022?node-id=2%3A122).
