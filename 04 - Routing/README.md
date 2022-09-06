[<img src="https://media.giphy.com/media/CAxbo8KC2A0y4/giphy.gif" width="100%">](https://reactrouter.com/)

# 04 - Routing

Time to make our Single Page Application support multiple pages! In todays lesson we'll how to use React Router to move between different components based on the URL.

## Assignments

1. First off - installation. React Router is actually a monorepo (a repo that hold many repos) that consists of:

    - [react-router-dom](https://github.com/remix-run/react-router/tree/main/packages/react-router-dom) - The browser version of React Router
    - [react-router-native](https://github.com/remix-run/react-router/tree/main/packages/react-router-native) - The React Native version of React Router
    - [react-router](https://github.com/remix-run/react-router/blob/main/packages/react-router) - Core functionality shared by both of the packages above

    We're on the web, so we're going to be using `react-router-dom`. Let's install it:

    ```sh
    npm i react-router-dom
    ```

## Resources

-   :books: Documentation

    -   [React Router Tutorial](https://reactrouter.com/en/main/getting-started/tutorial)

    -   [The Link component](https://v5.reactrouter.com/web/api/Link)

-   :art: Design
    -   [Figma project](https://www.figma.com/file/m37G0gJ3VjICyGLGTWsxyh/FE-Edu-Challenge---2022?node-id=2%3A122).
