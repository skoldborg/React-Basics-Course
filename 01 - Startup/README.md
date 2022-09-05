[<img src="https://media.giphy.com/media/MGYY2FIs8VrfW/giphy.gif" alt="Startup" width="100%">](https://reactjs.org/)

# 01 - Startup

Welcome to this course on the basics of React (among other things)! In today's lesson we'll make sure that we have our development environment set up properly, so that we have all the tools needed to make life as a Front End dev as smooth as possible. Once that is done we will move onto React - learning what it is, setting up a new project, and creating our first component.

All of the design resources needed during this course can be found in [this](https://www.figma.com/file/m37G0gJ3VjICyGLGTWsxyh/FE-Edu-Challenge---2022?node-id=2%3A122) Figma file.

Let's go!

## Assignments

1. Create a new project using [npx](https://www.npmjs.com/package/npx) `npx create-react-app my-app --template typescript`. If you don't have npx installed, install it globally using the command `npm install -g npx`. Note the added flag `--template typescript`, this tells Create React App to initialize the project with support for TypeScript.

2. CRA leaves us with a pretty barebones project in terms of structure. Let's expand on it. Create a new folder under `src` called `components`. This will be the home for all of our, you guessed it, components. Let's create our first one! Inside `components`, add folder called `Button` and inside that add a new file called `index.tsx`. You should end up with this folder and file structure:

    ```
    - src
        - components
            - Button
                - index.tsx
    ```

That's some structure for our components. Let's add a little for our base styles as well. Add a `styles` folder under `src` and move `index.css` inside it, ending up with this structure:

    ```
    - src
        - components
        - styles
            - index.css
    ```

Don't forget to update the import statements for `index.css` in `index.tsx`!

3. Right, we are ready to create our first component. Remember that we're using TypeScript so there will a bit extra work to make sure our code is correctly typed and safe. Here's an example of how a simple, typed, Button component might look.

    ```tsx
    import React from "react";

    interface ButtonProps {
        children?: React.ReactNode;
    }

    const Button: React.FC<ButtonProps> = (props) => {
        return <button>{props.children}</button>;
    };

    export default Button;
    ```

There's a couple of things of note going on here. - First we're importing `React` so that we can actually create, export, and render our component. - Then we're declaring an `interface`, which in simple terms is a way in TypeScript of describing the structure of an object. In this case it describes which props we can use in our component and what type/types they can be. - Last but not least we create the component, pass the props where they should be used or rendered, and then we export everything.

4. If everything has gone according to plan you should be ready to display your Button component. Import it at the top of the `App.tsx` file and then render it like this:

    ```tsx
    function App() {
        return (
            <div>
                <Button>Click me!</Button>
            </div>
        );
    }
    ```

5. We have a button! :tada: But it's looking kinda bleak. Let's remedy that by adding a bit of CSS. There are a lot of different approaches to styling components in React. We're going to start with plain 'ol vanilla CSS and then move on to something a bit more advanced (and a lot more powerful).

First off, grab the `reset.css` in the `resources` folder and put it into the `src` of your project. Then import it at the top of `index.tsx` in the same way as `index.css`.

After that you are free to open up the link to the design in Figma and do your best to make your component match the design. Look under "Pages --> Library" for the actual component design as well as the colors used throughout the projects. You'll be reusing these colors a lot so it's a good idea to put them as CSS variables in the `index.css` file.

The project uses the [Inconsolata](https://fonts.google.com/specimen/Inconsolata) font from Google Fonts. Find the font weights you need and load the font in `/public/index.html`.

-   :books: Documentation

    -   [ReactJS](https://reactjs.org/docs/getting-started.html)

    -   [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)

    -   [Components and props](https://reactjs.org/docs/components-and-props.html)

    -   [Render elements](https://reactjs.org/docs/rendering-elements.html)

-   :bookmark: Links to bookmark

    -   [React official tutorial](https://reactjs.org/tutorial/tutorial.html)

    -   [React cheatsheet](https://devhints.io/react)

    -   [TypeScript example on React](https://www.typescriptlang.org/play/index.html?jsx=2&esModuleInterop=true&e=196#example/typescript-with-react)

    -   [TypeScript+React Cheat Sheets](https://github.com/typescript-cheatsheets/react)

    -   [React patterns](https://reactpatterns.com/)
