## Description
An attempt at a chat app using Vue3 for the front-end, Express for the back-end, and ElephantSQL as the DB (cloud-based postgresql).
This is my first attempt at using sockets, which were super cool but overall the project was not successful.
Still, I learned a lot and enjoyed it. Thanks!

## Directions

Inside this repository are two separate projects:
 - one front-end Vue3 Project (vue3-guild-messenger/)
 - and one back-end Express project (express-generator-project/)

In order to run both projects, you must navigate to the root directory of each and run the following from a terminal:
  - From `socket-messenger/vue3-guild-messenger/`, run `npm run serve`
  - From `socket-messenger/express-generator-project/`, run `npm run startdev`

The express server should start up on `localhost:3000` and should provide useful logging, so I would recommend keeping your console open.
The vue project will be served on `localhost:8080`, and on navigating there you should be taken to `/login`.

### A note on logging in:
There are currently 4 names in the database that you can use to log in:
- Bill
- Duder
- Walter
- Donny

If you attempt to login with another name, the vue app will currently look as if you're moving on successfully, but the server will not function correctly.

I do have an endpoint setup in the express project to create new users, but front-end path currently to do so. 
Feel free to use postman to hit `localhost:3000/user` with a POST request with JSON body like so:
```
{ "name": "Donny" }
```

If you log in successfully, you should see a list of the user names mentioned above. 
You can click on a user name (including the user you used to Login which is an oversight), and the vue app should open a chat window.
You can type into a text field and click "Send" to send a message, and this is where the app will explode.

## Caveats, Takeaways, Next Steps
This was a fun project, but unfortunately proved too much for me in the given time. I had never used sockets before,
never done as much with Vue3 (we use Vue2 at my work) and it had been years since I tried to setup a back-end from scratch. Lots of learning :)

The following are things I would like to address if I spent more time working on this project:
- There is no testing. Anywhere. I'd like to have unit tests for my components, cypress tests for e2e functionality, and unit/integration testing for my server
- It doesn't work
  - Sending messages seems to be the end of the line at the moment, which is sad
- It's completely unstyled
- There's an unnecessary MessageRecord DTO - it's exactly the same as the Domain object
  - That wasn't intentional - the result of the evolution of my domain object toward the same representation in the database
- Lots more, but that's enough for now