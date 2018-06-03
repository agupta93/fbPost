# fbpost

## Requirements

1. Install MongoDB locally. Documentation on installing mongo can be found [here](https://treehouse.github.io/installation-guides/mac/mongo-mac.html)
2. Turn on mongo server by running `mongod` command
3. Run `node server.js` in fbPost folder. This starts an express based nodejs server which is connected with mongodb. This server runs at the port :3010
4. Open postman and fire the following post query 
    ```
      URL: http://localhost:3010/posts
      payload: {
	      "title": "updated his profile picture",
	      "description": "Older mixtape flopped. New EP dropping tomorrow. Abhinav on the vocals, I'll just collect the paychecks",
	      "userName": "John Hudson",
	      "imageUrl": "https://scontent.fdel1-4.fna.fbcdn.net/v/t1.0-1/p100x100/20770436_328639394245221_3068044076293987432_n.jpg?_nc_cat=0&oh=59eadf2745f5e9b6d297927f4dc4b9e1&oe=5BBE21B4"
      }
    ```
5. The above makes a db entry in the database
6. Now start the ui server by running `npm start`.

You should see a fb post as a result on localhost:3000
