# Fantastec Tehcnical Assesment

### Running this project locally:

1. Clone down this repository
2. `cd` into the root of this project
3. Run `yarn install` this will install the application dependencies
4. Run `yarn start` this will start up the project on `http://localhost:1234`


To run the Unit tests you can run `yarn test`
---

#### Project Notes

The app is built using React and follows a simple Container / Component architecture. This allows us to keep state at a top level and shareable between components.

Styling for this is simply achived with basic CSS, for a project of this size this made sense, over something less styled components or LESS / SASS.

Additions I would add:

1. Extend the test suit, to ensure that the application works as expected. For this assesment I have added a single jest snapshot test.

2. Add some overflow / scrolling logic to the live stream as to contain it to a single screen size.