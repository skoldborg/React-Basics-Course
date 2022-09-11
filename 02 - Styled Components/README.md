[<img src="https://media.giphy.com/media/nPxVvyTWo1aIU/giphy.gif" alt="Styled Components" width="100%">](https://styled-components.com/)

# 02 - CSS-in-JS with Styled Components

In this lesson we will get familiar with the concept of CSS-in-JS and more specifically [Styled Components](https://styled-components.com/).

## Assignments

1. In order to use Styled Components we need to install it. Run this in your terminal (yarn or npm depending on preference):

    ```sh
    npm install styled-components
    ```

    And then run this to install the Styled Components types as dev dependencies:

    ```sh
    npm install -D @types/styled-components
    ```

2. Go to your existing Button component and replace the CSS with a styled component (you can delete the `.css` file). The style declarations can be copied as is (without the class names) and features such as nesting and pseudo selectors will work out of the box!

    You can write your styled component straight inside `Button/index.tsx`, no need for second file just for styles (in this case).

3. One of the most powerful features of a styled component is that it accepts props which can then be used to set and update the styles.

    Add prop boolean called `inverted` to the Button's interface and pass it to the styled component. The prop should be optional and if it's `true` it should turn the background color to black and the text color to yellow.

    Test this out on your Button in `App.tsx`.

4. Add a new component to your application, called `MovieCard`. The card should look like the movie cards in the Figma design (without the star rating for now) and accept these props:

    - poster: string // The poster image src
    - title: string // Title of the movie
    - details: string // The movie details, eg "Flash Gordon, 120 min"

    Grab the `assets` folder under /resources for this lesson and put them in your `src` folder. Then you can import one of the images from there to `App.tsx` and use it as your test image.

    ```tsx
    import poster from "./assets/posters/flash-gordon.jpeg";
    ```

    Note: You should set a max-width to your `MovieCard` for now or it will be ginormous. We will control its width with a grid later on.

5. This app is in need of a grid! We'll use CSS Grid for this. Create a `<Grid />` that takes the number of columns in the grid as a prop. Here's how a grid with 5 columns per row should work:

    ```tsx
    <Row columnCount={5}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
    </Row>
    ```

    Use your newly created grid components to render a row with five `MovieCards` in `App.tsx`.

6. **Bonus content** Done already? Well done you :clap: Use this time to extend your `Grid` component. In order for it to be really powerful you should be able to set the CSS Grid properties `row-gap` and `column-gap`. Set them as props and pass them to your styled component:

    ```tsx
    columnGap?: string // eg "16px"
    rowGap?: string
    ```

## Resources

-   :books: Documentation

    -   [Getting started using Styled Components](https://styled-components.com/docs/basics#getting-started)

    -   [Using props and styled components](https://styled-components.com/docs/basics#adapting-based-on-props)

-   :link: Links

    -   [How to use styled components](https://www.smashingmagazine.com/2020/07/styled-components-react/)

    -   [React patterns](https://reactpatterns.com/)

    -   [Awesome styled components](https://github.com/styled-components/awesome-styled-components)
