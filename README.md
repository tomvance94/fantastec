# Fantastec Assesment

A React application built for the fantastec technical assesment.

### How To Run

1. Run `yarn install` to install the project dependencies
2. Run `yarn start` this will build and run the application on 'http://localhost:1234'
3. Run `yarn test` To run the unit tests

### About Submission

The application is built using React and follows a simple Container / Componet architecture, allowing all the state to remain at the top of the application.

Styling has been achived with simple CSS, for a project of this size for me this was a good fit. If the project was to scale I would look at alternatives such as styles-components or LESS / SASS.

I have mocked out the data that I would expect back from an API, this can be found in `./src/feed.js`.

I have written some unit tests (given more time I would expand these further), using mocha and enzyme to ensure the application works as expected.
