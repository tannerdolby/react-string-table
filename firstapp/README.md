# Tic Tac Toe single page web app with React
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### This project contains three React components:
- Square
- Board
- Game
The Square component (class Square extends React.component) is used to render a single <button>. The Board component renders 12 squares (4x3 matrix) with (mxn)=(rows,columns). The last component is the Game, this class renders a board with placeholder values from 1-12 for each square to begin with. By passing a prop from the parent Board component to a child Square component the board is now populated with the numbers there are squares.

* Passing data through props we can pass data from the Board component to the Square component. This was accomplished by changing the renderSquare method to pass a prop called value to the Square component.

First pass the prop value into the renderSquare method within the Board class
- renderSquare(i) {
-   return <Square value ={i} />;
- }
Next, change the render method within the Square class to show the passed prop value from Board component.
- render() {
-   return (
-     <button className="square">
-       {this.props.value} //showing the value passed by prop
-     </button>

### Interactive components
Filling the Square component with the string "X" when a square is clicked will be the first interactive component. Going into the Square component, the button tag returned from the render() function in Square must be changed to alert in browser if a square is clicked.
Passing a function as the onClick prop makes it so react will only call this func after a square has been clicked. This is creating an event handler to display an alert to the page when a Square component has been clicked.
- <button className="square" onClick={function() { alert('click'); }}>

Now to replace that test function for handling a click, we can make the Square component remember it was clicked. By setting the Square components state to an 'X'. Using this.state within the Square components constructor to initialize the state to null then change it to 'X' when a square is clicked.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
