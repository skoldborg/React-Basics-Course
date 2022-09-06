[<img src="https://media.giphy.com/media/xh7Nhs6PlOThC/giphy.gif" alt="State as memory" width="100%">](https://reactjs.org/)

# 03 - State

In this lesson we will unlock what is probably the most powerful feature in React - state!

## Assignments

1. Let's start by creating a component where it makes sense to use state. The star rating from the Figma design is ideal for this. Create a `Rating` folder and put it in your `components` folder.

    There's about a hundred different ways of building a component like this in terms of markup. The most semantically correct would be a group of radio buttons but for this course the choice is entirely yours!

    Focus on the styling of the component for now and we'll deal with the logic and the state in the next assignment. You can grab the SVGs for the stars (filled and empty) from the `/resources` folder. Put them in a `/assets` folder in your rating component. [Here's a guide](https://www.designcise.com/web/tutorial/how-to-use-svg-as-component-with-create-react-app) on how to use SVGs in Create React App.

    Your file structure should look like this:

    ```
    - src
        - components
            - Rating
                - assets
                    star.svg
                    star-filled.svg
                index.tsx
    ```

2. Got your styled rating component ready? Great! Let's give it some state and allow users to set their own rating.

    In your component, declare a new state using [hooks](https://reactjs.org/docs/hooks-reference.html). Let's call it `rating`. Set its default value to `0`.

    Now, when a user clicks on a star you should update the state with an integer that represents the rating. So if I click on star number 3 the state should be set to... `3`. Then make it so that that star and those before it are filled in, so the user gets some feedback on their interaction.

## Resources

-   :books: Documentation

    -   [ReactJS](https://reactjs.org/docs/getting-started.html)

    -   [State and lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

    -   [Introducing hooks](https://reactjs.org/docs/hooks-intro.html)

    -   [State hook](https://reactjs.org/docs/hooks-state.html)

-   :link: Links

    -   [A guide to useState in React](https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/)

-   :headphones: Videos

    -   [React.useState()](https://www.youtube.com/watch?v=O6P86uwfdR0)

-   :painter: Design
    -   [Figma project](https://www.figma.com/file/m37G0gJ3VjICyGLGTWsxyh/FE-Edu-Challenge---2022?node-id=2%3A122).
