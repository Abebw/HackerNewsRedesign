# Hacker News Redesign

This project is a basic hacker news redesign. It lacks the folllowing things
1) Self post links don't work
2) You can't upvote or downvote or interact with the user account at all
3) There's no persistance between page loads so refreshing the page forgets your favorites
4) There's no automated testing
5) There's no interaction when the page is loading. You probobly want a spinner
6) This was developed using Firefox v125 and hasn't been tested on any other browsers
7) Dark mode doesn't react to prefers-color-scheme 
8) It's never been tested on phones and wasn't designed to be responsive on small screens

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
