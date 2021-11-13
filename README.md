Your task is to create a simple one-page forum that allows users to register, log in, publish posts, and edit/delete them.

The application is going to have three pages:

1. Register page - a page that allows a new user to register with a unique username and password.
2. Login page - a page that allows a registered user to connect the application after a username and password validation.
3. Forum page - a page that allows a logged-in user to create a new post, see other posts made by other users.
   A user can also edit/delete his posts.

Here is an example of all three pages:
https://i.ibb.co/JBM2v0d/mock.png

To get started:
Clone this repo https://github.com/gididaf/dream-test using git clone
Run npm install OR yarn
Run npm start OR yarn start to start the client
Run npm run start:server OR yarn start:server to start the server
In your browser, go to http://localhost:3000
Happy coding :)

Notes:

1. The client-side already contains SCSS support if you would like to style your app a little.
2. The client-side already has an AJAX example with Axios so that you can use it for all your AJAX calls.
3. Consider using React Router (https://reactrouter.com/docs/en/v6/getting-started/tutorial) for the three application pages.

4. The server-side contains a global var called database. You can use it to simulate a database and store all the users/posts data there or use some advanced technic like https://www.npmjs.com/package/node-json-db
5. You don't have to mess with sessions/cookies handling if you don't want to. You can use local storage or another simple method to save the logged-in user and verify it on AJAX requests.

6. Don't forget that new users cannot register with a taken username. And don't forget a user can edit/delete only his posts.

Bonus: Add the ability for users to comment on each post.

When you have done, please send a zip file to
gidi@dreamvps.com
Or push your code anywhere
